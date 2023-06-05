import React from "react";
import { Grid, Icon, Segment } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { removeEntryRedux } from "../actions/entries.actions";
import { openEditModal } from "../actions/modal.actions";

const EntryLine = ({
  id,
  description,
  value,
  isExpensive = false,
}) => {
  const dispatch = useDispatch();
  return (
    <>
      <Segment color={isExpensive ? "red" : "green"}>
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              {description}
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              {value ? "$" + value : "---"}
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon
                name="edit"
                bordered
                onClick={() => {
                  //setEntryToEdit(id);
                  dispatch(openEditModal(id));
                }}
              ></Icon>
              <Icon
                name="trash"
                bordered
                onClick={() => dispatch(removeEntryRedux(id))}
              ></Icon>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
};

export default EntryLine;