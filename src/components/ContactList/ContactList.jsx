import { Component } from 'react';
import { Contact, DeleteBtn, List } from './ContactList.styled';

export class ContactList extends Component {
  render() {
    const data = this.props.data;
    return <List>
        {data.map((contact) => {
            return(
                <Contact key={contact.id}>
                    <p>{contact.name}: {contact.number}</p>
                    <DeleteBtn id={contact.id} onClick={this.props.onDelete}>Delete</DeleteBtn>
                </Contact>
            )
        })}
    </List>;
  }
}
