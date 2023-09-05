import Navbar from "./component/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCards from "./component/ContactCards";
import AddAndUpdateContact from "./component/AddAndUpdateContact";
import useDicclouse from "./hooks/useDicclouse";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFoundContact from "./component/NotFoundContact";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const { isOpen, onClose, onOpen } = useDicclouse();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "Contacts");
        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactLists);
          return contactLists;
        });
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  const filterContact = (e) => {
    const value = e.target.value;
    const contactsRef = collection(db, "Contacts");
    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactLists.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );
      setContacts(filteredContacts);
      return filteredContacts;
    });
  };
  return (
    <>
      <div className=" max-w-[360px] min-w-[360px]  mx-auto px-4 ">
        <Navbar />
        <div className="flex items-center">
          <div className="flex items-center relative flex-grow">
            <FiSearch className=" text-white text-3xl ml-1 absolute " />
            <input
              onChange={filterContact}
              type="text"
              className=" border  h-10 rounded-md flex flex-grow text-white border-white bg-transparent pl-9"
            />
          </div>
          <AiFillPlusCircle
            onClick={onOpen}
            className="text-white text-5xl ml-2"
          />
        </div>
        <div className=" mt-3 gap-3 flex flex-col ">
          {contacts.length <= 0 ? (
            <NotFoundContact />
          ) : (
            contacts.map((contact) => (
              <ContactCards key={contact.id} contact={contact} />
            ))
          )}
        </div>
      </div>
      <AddAndUpdateContact onClose={onClose} isOpen={isOpen} />
      <ToastContainer position="bottom-center" />
    </>
  );
};

export default App;
