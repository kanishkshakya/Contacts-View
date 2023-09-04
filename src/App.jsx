import Navbar from "./component/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCards from "./component/ContactCards";

const App = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "Contacts");
        const contactSnapshot = await getDocs(contactsRef);
        const contactLists = contactSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactLists);
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);
  return (
    <div className=" max-w-[360px] min-w-[360px]  mx-auto px-4 ">
      <Navbar />
      <div className="flex items-center">
        <div className="flex items-center relative flex-grow">
          <FiSearch className=" text-white text-3xl ml-1 absolute " />
          <input
            type="text"
            className=" border  h-10 rounded-md flex flex-grow text-white border-white bg-transparent pl-9"
          />
        </div>
        <AiFillPlusCircle className="text-white text-5xl ml-2" />
      </div>
      <div className=" mt-3 gap-3 flex flex-col ">
        {contacts.map((contact) => (
          <ContactCards key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
};

export default App;
