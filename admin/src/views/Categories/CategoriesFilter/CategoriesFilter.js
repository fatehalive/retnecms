
import React from 'react';
import { useCategoriesUIContext } from '../../../components/Context/CategoriesContext'
import { Formik, Form, Field, ErrorMessage } from 'formik';

const CategoriesFilter = () => {

  const categoriesUIContext = useCategoriesUIContext();
  const categoriesUIProps = React.useMemo(() => {
    return {
      queryParams: categoriesUIContext.queryParams,
      setQueryParams: categoriesUIContext.setQueryParams,
      initialFilter: categoriesUIContext.initialFilter
    };
  }, [categoriesUIContext]);

  const searchAction = (values) => {
    let filter = {}
    const { category_name } = values
    let newQueryParams = { ...categoriesUIProps.queryParams }
    filter.category_name = category_name ?? ""
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
            <div className="form-group">
              <div className="col-lg-12">
                <Field
                  name="category_name"
                  className="form-control"
                  // value={values.category_name}
                  placeholder="Search By Category Name"
                  label="Category Name"
                  onChange={(e) => {
                    setFieldValue("category_name", e.target.value);
                    handleSubmit()
                  }}
                />
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