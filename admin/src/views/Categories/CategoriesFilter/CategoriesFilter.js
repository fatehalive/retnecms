
import React, { useState } from 'react';
import { useCategoriesUIContext } from '../../../components/Context/CategoriesContext'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { DateRangePicker, Input, InputGroup } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

const CategoriesFilter = () => {

  const categoriesUIContext = useCategoriesUIContext();
  const categoriesUIProps = React.useMemo(() => {
    return {
      queryParams: categoriesUIContext.queryParams,
      setQueryParams: categoriesUIContext.setQueryParams,
      initialFilter: categoriesUIContext.initialFilter
    };
  }, [categoriesUIContext]);

  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)


  const searchAction = (values) => {
    let filter = {}
    const { category_name, startDate, endDate } = values
    let newQueryParams = { ...categoriesUIProps.queryParams }
    filter.category_name = category_name ?? ""
    filter.startDate = startDate ?? ""
    filter.endDate = endDate ?? ""
    newQueryParams.filter = filter
    newQueryParams.pageNumber = 1
    categoriesUIProps.setQueryParams(newQueryParams)
  }

  return (

    <Formik
      initialValues={categoriesUIProps.initialFilter}
      onSubmit={(values) => {
        searchAction(values)
      }}>
      {({ handleSubmit, values, handleBlur, setFieldValue }) => (
        <>
          <Form className="form form-label-bottom">
            <div className="form-group row">
              <div className="col-lg-6">
                <Field
                  name="category_name"
                  // className="form-control"
                  component={Input}
                  // value={values.category_name}
                  placeholder="Search By Category Name"
                  label="Category Name"
                  onChange={(inputed) => {
                    setFieldValue("category_name", inputed);
                    handleSubmit()
                  }}
                />
              </div>
              <div className="col-lg-6">
                <Field
                  type='date'
                  className="col-lg-12 "
                  component={DateRangePicker}
                  placeholder="Search By Date"
                  label="Category Name"
                  onChange={(date) => {
                    setFieldValue('startDate', date['0'])
                    setFieldValue('endDate', date['1'])
                    handleSubmit()
                  }}
                />
                {/* <DateRangePicker
                  type="date"
                  appearance="default"
                  onChange={(date) => {
                    setFieldValue('startDate', date['0'])
                    setFieldValue('endDate', date['1'])
                    handleSubmit()
                  }}
                /> */}
              </div>

              {/* <button
                        type="submit"
                        onSubmit={() => handleSubmit()}
                        className="btn btn-primary btn-rounded mt-5 ml-3 mb-2 mr-2 float-left"
                      >
                        Cari
                      </button> */}
            </div>

          </Form>
        </>
      )}
    </Formik>

  )
}

export default CategoriesFilter