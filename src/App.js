import { Container } from "semantic-ui-react";
import "./App.css";
import MainHeader from "./components/MainHeader";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import NewEntryForm from "./components/NewEntryForm";
import { useEffect, useState } from "react";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";
import { useDispatch, useSelector } from "react-redux";
import { getAllEntries } from "./actions/entries.actions";

function App() {
  // const [isOpen, setIsOpen] = useState(false);
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const isOpen = useSelector((state) => state.modals.isOpen);
  const entries = useSelector((state) => state.entries);
  console.log(entries);

  useEffect(() => {
    let totalIncome = 0;
    let totalExpenses = 0;
    entries?.map((entry) => {
      if (entry.isExpensive) {
        return (totalExpenses += entry.value);
      }
      return (totalIncome += entry.value);
    });
    setTotal(totalIncome - totalExpenses);
    setExpenseTotal(totalExpenses);
    setIncomeTotal(totalIncome);
    console.log(
      `Total income are: ${totalIncome} and total expenses are: ${totalExpenses}`
    );
  }, [entries]);

  // // const payload_add = {
  // //   id: 5,
  // //   description: "Hello from Redux",
  // //   value: 100,
  // //   isExpensive: false,
  // // };

  // // store.dispatch(addEntryFunction(payload_add));
  // // store.dispatch(removeEntryFunction(1));

  // const resetEntry = () => {
  //   // setIsOpen(false);
  //   dispatch(closeEditModal);
  //   setDescription("");
  //   setValue("");
  //   setIsExpensive(false);
  // };

  // const addEntry = ({ description, value, isExpensive }) => {
  //   const result = entries.concat({
  //     id: entries.length + 1,
  //     description,
  //     value: Number(value),
  //     isExpensive,
  //   });
  //   // setEntries(result);
  //   resetEntry();
  // };

  // const getEntry = (id) => {
  //   console.log(entries);
  //   const result = entries?.find((entry) => entry.id === id);
  //   console.log(result);
  //   return result;
  // };

  // const setEntryToEdit = (id) => {
  //   console.log(id);
  //   if (id) {
  //     const entry = getEntry(id);
  //     if (!entry) return;
  //     console.log(entry);
  //     // setIsOpen(true);
  //     dispatch(openEditModal);
  //     setDescription(entry?.description);
  //     setValue(entry?.value);
  //     setIsExpensive(entry?.isExpensive);
  //     setEntryId(entry?.id);
  //   }
  // };

  // const editEntry = ({ id, description, value, isExpensive }) => {
  //   console.log(id);
  //   console.log(description);
  //   if (id) {
  //     const result = [
  //       ...entries.filter((entry) => entry.id !== id),
  //       {
  //         id: id,
  //         description: description,
  //         value: value,
  //         isExpensive: isExpensive,
  //       },
  //     ];
  //     // setEntries(result);
  //     resetEntry();
  //   }
  // };

  // async function fetchInitialData() {
  //   const result = await axios.get("http://localhost:3001/entries");
  //   console.log(result);
  // }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllEntries());
  }, []);

  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance label="Your Balance:" value={total} size="small" />
      <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal} />
      <MainHeader title="History" type="h3" />
      <EntryLines entries={entries} />
      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm />
      <ModalEdit isOpen={isOpen} />
    </Container>
  );
}

export default App;
