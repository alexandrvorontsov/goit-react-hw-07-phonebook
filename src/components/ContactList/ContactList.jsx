import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestContacts, requestDeleteContacts } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import {
  BodyList,
  ListItem,
  ListButton,
  MessageLoading,
  MessageError,
} from './ContactList.styled';

export const ContactList = () => {
  const filter = useSelector(state => state.filter);
  const { items, isLoading, error } = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestContacts());
  }, [dispatch]);

  const handleDeleteContact = evt => {
    dispatch(requestDeleteContacts(evt.target.id));
  };

  return (
    <div>
      <BodyList>
        {items !== null &&
          items
            .filter(contact =>
              contact?.name?.toLowerCase().includes(filter.toLowerCase())
            )
            .map(({ id, name, number }) => {
              return (
                <ListItem key={id}>
                  <span>{name}: </span>
                  <span>{number}</span>
                  <ListButton
                    type="button"
                    id={id}
                    onClick={handleDeleteContact}
                  >
                    Delete
                  </ListButton>
                </ListItem>
              );
            })}
      </BodyList>
      {isLoading && <MessageLoading>Loading contacts...</MessageLoading>}
      {error && <MessageError>{error}</MessageError>}
    </div>
  );
};
