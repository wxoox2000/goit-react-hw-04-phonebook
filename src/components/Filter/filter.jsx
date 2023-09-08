import { Component } from 'react';
import { Formik } from 'formik';
import { FormItem, Input } from './filter.styled';

export class Filter extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          search: '',
        }}
      >
        <FormItem>
          Find contacts by name or number
          <Input name="search" onInput={this.props.searchQuote} />
        </FormItem>
      </Formik>
    );
  }
}
