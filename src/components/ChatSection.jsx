import { useRef, useState } from "react";
import { BiChevronsRight } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import { BiUpload } from "react-icons/bi";
import { BiSave } from "react-icons/bi";
import { BiArrowToTop } from "react-icons/bi";
import { BiCopy } from "react-icons/bi";
import { BiDownload } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";
import { BiSolidUpArrow } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";
import { BiSend } from "react-icons/bi";
import Dots from "../img/dots.gif";

function ChatSection() {
  const [message, setMessage] = useState("");
  const [languageOption, setLanguageOption] = useState("fr");
  const [credits, setCredits] = useState(300);
  const [messageHistory, setMessageHistory] = useState([]);
  const chatSection = useRef();

  async function consumeAPI() {
    const url =
      "https://google-translate113.p.rapidapi.com/api/v1/translator/json";
    const options = {
      method: "POST",
      headers: {
        "x-rapidapi-key": "e7ae2f5572msh4f4078e1b8fd7bdp15959ajsn435b64252a52",
        "x-rapidapi-host": "google-translate113.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "auto",
        to: languageOption,
        protected_paths: ["extra.last_comment.author"],
        common_protected_paths: ["image"],
        json: {
          title: message,
          author: "John Doe",
          rate: 4.2999,
          extra: {
            image: "hello.jpg",
            comment_counts: 10,
            last_comment: {
              author: "not be translated",
              short_text: "Hi thank for your post... We need more information",
            },
          },
        },
      }),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  async function send() {
    setMessageHistory([
      ...messageHistory,
      {
        sender: "You",
        text: message,
      },
      {
        sender: "Bot",
        text: "",
      },
    ]);
    deleteText();
    const result = await consumeAPI();
    console.log(result);
    setMessageHistory([
      ...messageHistory,
      {
        sender: "You",
        text: message,
      },
      {
        sender: "Bot",
        text: result.trans.title,
      },
    ]);
    setCredits(credits - 1);
    chatSection.current.scrollTop = chatSection.current.scrollHeight;
  }

  function handeLanguageSelection(event) {
    setLanguageOption(event.target.value);
    console.log(event.target.value);
  }

  function deleteText() {
    setMessage("");
  }

  function copyText() {
    navigator.clipboard.writeText(message);
  }

  return (
    <section className="flex flex-col w-full bg-[#13141A]">
      <header className="hidden lg:flex border-b border-gray-500 w-full p-4">
        <div className="flex gap-x-2">
          <button className="bg-[#333441] rounded py-1 px-2 ">
            <BiChevronsRight className="w-6 h-6" />
          </button>
          <button className="flex bg-[#333441] rounded p-1 px-4 gap-x-1 items-center">
            <span>Example Session</span>
            <BiChevronDown className="w-6 h-6" />
          </button>
          <button className="flex bg-[#333441] rounded p-1 px-4 gap-x-1 items-center">
            <BiUpload className="w-5 h-5" />
            <span> Upload Files</span>
          </button>
        </div>
        <div className="flex ml-auto gap-x-2">
          <button className="bg-[#333441] rounded py-1 px-2">
            <BiSave className="w-6 h-6" />
          </button>
          <button className="bg-[#333441] rounded py-1 px-2">
            <BiArrowToTop className="w-6 h-6" />
          </button>
          <button className="bg-[#333441] rounded py-1 px-2">
            <BiCopy className="w-6 h-6" />
          </button>
          <button className="bg-[#333441] rounded py-1 px-2">
            <BiDownload className="w-6 h-6" />
          </button>
        </div>
      </header>
      <main className="w-full h-[75vh] p-10 flex flex-col">
        <div className="w-full flex flex-col overflow-y-auto" ref={chatSection}>
          {messageHistory.map((message, index) => (
            <div className="w-full flex" key={index}>
              {message.sender === "You" ? (
                <div className="flex gap-x-1 justify-center items-center ml-auto">
                  <div className="bg-[#333441] rounded-xl py-2.5 px-5">
                    {message.text}
                  </div>
                  <div className="font-semibold bg-red-400 rounded-full p-3">
                    {message.sender}
                  </div>
                </div>
              ) : (
                <div className="flex gap-x-1">
                  <div className="font-semibold bg-red-400 rounded-full p-3">
                    {message.sender}
                  </div>
                  <div className="bg-[#333441] rounded-xl py-2.5 px-5">
                    {message.text === "" ? (
                      <img className="w-10" alt="dots" src={Dots} />
                    ) : (
                      message.text
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
      <footer className="w-full flex flex-col gap-y-4 pb-4 px-10 mt-auto">
        <div className="rounded-xl p-0.5 w-full bg-gradient-to-br from-blue-500 to-red-400">
          <div className="rounded-xl w-full h-full bg-[#333441] p-2 flex">
            <input
              className="w-full lg:w-1/2 bg-transparent border-none outline-none"
              placeholder="Enter your question, goal or next big project"
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") send();
              }}
              value={message}
            />
            <div className="ml-auto flex gap-x-2">
              <button onClick={deleteText}>
                <BiTrash className="w-7 h-7 text-red-400" />
              </button>
              <button onClick={copyText}>
                <BiCopy className="w-7 h-7" />
              </button>
              <button onClick={send}>
                <BiSend className="w-10 h-10 bg-red-400 rounded-full p-1.5 -rotate-90" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-x-2">
          <button className="bg-[#333441] hidden xl:flex rounded-xl py-1 px-2 justify-center items-center gap-x-2">
            <span className="border-r pr-2 border-gray-500">No Tool</span>
            <div className="flex flex-col pl-2">
              <BiSolidUpArrow className="w-2 h-2" />
              <BiSolidDownArrow className="w-2 h-2" />
            </div>
          </button>

          <div className="bg-[#333441] rounded-xl py-1 px-2 flex justify-center items-center gap-x-2">
            Target Language
            <select
              className="text-gray-500 w-20 rounded-lg"
              onChange={handeLanguageSelection}
            >
              <option value="fr">French</option>
              <option value="es">Spanish</option>
              <option value="zh">Chinese</option>
              <option value="ja">Japanese</option>
              <option value="ar">Arabic</option>
              <option value="tr">Turkish</option>
            </select>
          </div>

          <span className="bg-[#333441] rounded-xl py-2 px-4 ml-auto flex items-center justify-center gap-x-6">
            Credit Remaining
            <span className="bg-[#4f5064] rounded-3xl px-3">{credits}</span>
          </span>
        </div>
      </footer>
    </section>
  );
}

export default ChatSection;
