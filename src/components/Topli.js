import React, { useState,useEffect } from 'react'
import Toggle from './Toggle'
import { ref, set, onValue } from "firebase/database";
import database from '../database';

export default function Topli() {

    const [lastWasher, setlastWasher] = useState()
    const [washer, setwasher] = useState()

    function writeUserData() {
        const db = database;
        set(ref(db, '/'), {
            lastwash: lastWasher
        });
    }
    function readLastWash() {
        const dataB = ref(database, '/');
        onValue(dataB, (snapshot) => {
            const data = snapshot.val();
            setlastWasher(data.lastwash)
            
        });
    }

    var participants = ["Yash", "Sanket", "Dhruwang", "Varun", "Vedant", "Siddharth", "ChaiMaker"]
    var chaiMaker = "chiku"
    var lastWash = localStorage.getItem("lastWash")
    var members = ["Yash", "Sanket", "Dhruwang", "Varun", "Siddharth", "Vedant"]
    const [page, setPage] = useState(0)
    var present = []

    const handleAdminLogin = () => {
        const password = prompt("hello");
        console.log(password)
        if (password === "1111") {
            setPage(1)
        }
        if (!localStorage.getItem("lastwash")) {
            prompt("Enter a name to start")
        }
    }
    const handleMakeChai = () => {
        var memberObj = document.getElementsByClassName("memberToggle")
        var memberArray = Array.from(memberObj)
        memberArray.forEach(element => {
            if (element.checked) {

                present.push(element.value)
            }
        });
        writeUserData();
        setwasher(findTopliWasher(present, lastWasher))
    }

    function findTopliWasher(present, lastWash) {
        var chaiIndex = participants.indexOf(lastWash) + 1;
        var matchFound = true;
        setPage(2)
        while (matchFound) {
            if (lastWash === "siddharth") {
                lastWash = chaiMaker;
                matchFound = false;
                return lastWash

            }
            if (!present.includes(participants[chaiIndex])) {
                if (chaiIndex === 7) {
                    chaiIndex = 0;
                }
                else {
                    chaiIndex++;
                }

            }
            if (present.includes(participants[chaiIndex])) {
                lastWash = participants[chaiIndex];
                matchFound = false;
                return lastWash;
            }
        }
    }
    useEffect(() => {
      readLastWash()
    }, [])
    

    return (
        <div className='topli'>
            {console.log(lastWasher)}
            {page === 0 && <div>
                <button onClick={handleAdminLogin}>Admin Login</button>
            </div>}
            {page === 1 && <div>
                <div className='membersTable'>
                    {members.map((mem) => {
                        return <div className='memberRow'>
                            <p>{mem}</p>
                            <p><Toggle value={mem} /></p>
                        </div>
                    })}

                </div>
                <button onClick={handleMakeChai}>Make Chai</button>
            </div>}
            {page===2 &&
                <div>
                    <h2>{washer}</h2>
                </div>
            }
        </div>
    )
}
