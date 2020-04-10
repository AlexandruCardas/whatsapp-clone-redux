import { contacts as userContacts } from '../static-data';
import { DELETE_CONTACT } from '../constants/action-types';

export default function contacts(state = userContacts, action) {
  switch (action.type) {
    case DELETE_CONTACT:
      const contactId = action.payload;
      const { [contactId]: deleted, ...newState } = state; // deleted means
      // the new state is sent back without the deleted object
      return newState;

    default:
      return state;
  }
}
