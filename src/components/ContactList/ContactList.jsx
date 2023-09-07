import React from 'react';
import { List, Item, Paragraph, Button } from './ContactList.styled';

export const ContactList = ({ users, onDelete }) => {
  return (
    <List>
      {users.map(user => {
        return (
          <Item key={user.id}>
            <Paragraph>
              {user.name} : {user.number}
            </Paragraph>
            <Button type="button" onClick={() => onDelete(user.id)}>
              Delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
};
