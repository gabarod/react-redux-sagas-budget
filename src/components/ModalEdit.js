import React from "react";
import { Button, Modal } from "semantic-ui-react";
import EditEntryForm from "./EditEntryForm";
import { closeEditModal } from "../actions/modal.actions";
import { useDispatch } from "react-redux";
import useEntryDetails from "../hooks/useEntryDetails";

const ModalEdit = ({ isOpen, description, value, isExpensive, id }) => {
  const dispatch = useDispatch();

  const entryUpdate = useEntryDetails(description, value, isExpensive);

  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit entry</Modal.Header>
      <Modal.Content>
        <EditEntryForm
          description={entryUpdate.description}
          id={id}
          isExpensive={entryUpdate.isExpensive}
          value={entryUpdate.value}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => entryUpdate.updateEntry(id)}>OK</Button>
        <Button onClick={() => dispatch(closeEditModal())}>Close</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ModalEdit;
