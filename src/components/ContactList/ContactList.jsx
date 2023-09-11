import { Contact, DeleteBtn, List } from './ContactList.styled';

export const ContactList = ({data, onDelete}) => {
    return <List>
        {data.map((contact) => {
            return(
                <Contact key={contact.id}>
                    <p>{contact.name}: {contact.number}</p>
                    <DeleteBtn id={contact.id} onClick={onDelete}>Delete</DeleteBtn>
                </Contact>
            )
        })}
    </List>;
}
