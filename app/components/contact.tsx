'use client'
import Header from './ui/header'
import TextInput from './ui/text-input'
import TextArea from './ui/textarea'
import toast from 'react-hot-toast'
// import { sendEmail } from '../functions/send-email'
import { FaPaperPlane } from 'react-icons/fa6'
import SubmitButton from './ui/submit-button'
import { useSectionInView } from '../lib/hooks'
import { motion } from 'framer-motion'
import { useState } from 'react'
import CircularProgress from "@mui/material/CircularProgress";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@mui/material";


// contact Firebase filese
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, addDoc, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLRNfwtKAR4QDIU15EKD_s4X__JHqUhjo",
  authDomain: "portfolio30-4827a.firebaseapp.com",
  projectId: "portfolio30-4827a",
  storageBucket: "portfolio30-4827a.firebasestorage.app",
  messagingSenderId: "363432439601",
  appId: "1:363432439601:web:1aa8d5daa5eb1f12578a10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// contact Firebase filese

export default function Contact() {
  const { ref } = useSectionInView('Contact', 0.5)


  const [UserEmail, setUserEmail] = useState('');
  const [UserSubject, setUserSubject] = useState('');
  const [UserMessage, setUserMessage] = useState('');
  const [loader, setLoader] = useState(false)
  const [open, setOpen] = useState(false);

  const FriendsMessages = {
    Email: UserEmail,
    Subject: UserSubject,
    Message: UserMessage,
  }



  const SendMessages = async (event: any) => {
    event.preventDefault()
    // console.log("UserData", FriendsMessages)
    // console.log("Button clicked!");

    try {
      setLoader(true)
      const docRef = await addDoc(collection(db, "Portfolio Contact"), FriendsMessages);
      console.log("Document written with ID: ", docRef.id);
      setOpen(true)
      setUserEmail('')
      setUserSubject('')
      setUserMessage('')
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setLoader(false)
  };





  const handleSendMessage = () => {
    console.log("Message Sent!");
    setOpen(true); // Open Dialog
  };

  const handleClose = () => {
    setOpen(false); // Close Dialog
  };



  return (
    <section
      ref={ref}
      id="contact"
      className="scroll-mt-24"
    >
      <Header
        animateOpacity
        className="text-center"
      >
        Contact Me!
      </Header>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <p className="text-center lg:px-48 md:px-32 sm:px-12 text-lg text-gray-400">
          Thank you for checking out my website! If you have any questions or
          would like to get in touch, feel free to reach out to me.
        </p>
        <form
          id="contact-form"
          className="lg:px-48 md:px-32 sm:px-12 mt-12"
          onSubmit={(event) => SendMessages(event)}
        // action={async (formData) => {
        //   const { error } = await sendEmail(formData)
        //   if (error) {
        //     toast.error(error)
        //   }
        //   const form = document.getElementById(
        //     'contact-form'
        //   ) as HTMLFormElement
        //   form.reset()
        //   toast.success('Message sent. Thanks for reaching out!')
        // }}
        >
          <div className="grid grid-cols-2 gap-4 mb-6">
            <TextInput
              placeholder="E-mail"
              type="email"
              name="email"
              required
              max={100}
              onChange={(event) => setUserEmail(event?.target.value)}
              value={UserEmail}
            />
            <TextInput
              placeholder="Subject"
              name="subject"
              required
              min={3}
              max={200}
              onChange={(event) => setUserSubject(event?.target.value)}
              value={UserSubject}
            />
          </div>
          <TextArea
            placeholder="Message"
            className="mb-4"
            name="message"
            required
            maxLength={5000}
            onChange={(event) => setUserMessage(event?.target.value)}
            value={UserMessage}
          />




          <SubmitButton className="group">


            {loader ? <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <CircularProgress size={20} color='inherit' thickness={5} />
            </div> : ""}
            Send Message{' '}
            <FaPaperPlane className="group-hover:translate-x-1 group-hover:transform group-hover:-translate-y-1 transition-transform" />
          </SubmitButton>


          {/* pop up */}
          <div >
            {/* <Button variant="contained" color="primary" onClick={handleSendMessage}>
              Send Message
            </Button> */}
            <Dialog open={open} onClose={handleClose} >
              <div className="bg-orange-400 text-blue-950 font-bold">
                <DialogTitle className=' font-bold'>Thanks For Your Message</DialogTitle>
                <DialogContent>Your message was sent successfully!</DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} className='text-blue-950  font-bold'>
                    OK
                  </Button>
                </DialogActions>
              </div>
            </Dialog>
          </div>

        </form>
      </motion.div>
    </section>
  )
}
