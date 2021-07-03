import React, { useEffect, } from "react"
import scormHook from "@thewillhuang/scorm-hook"

const LMS = () => {
  const [state, setState] = scormHook({
    state: {},
    setState: () => { },
    config: {},
  }) // starting state as state, config is an object with methods matching SCORM2004 standards methods visit https://scorm.com/scorm-explained/technical-scorm/run-time/ for more details
  useEffect(() => {
    console.log(state)
  }, [state])
  return (
    <div>
      <button
        onClick={() => {
          window.open('http://139.180.218.78/IFA-server/storage/app/public/file-managers/13/Demo%20C%C3%A2u%20h%E1%BB%8Fi%20-%20Thu%20-%20Scorm%201.2/story_html5.html?lms=1')
        }}
      >
        {"open course"}
      </button>
      <iframe width="1000vh" height="1000vh" src='http://139.180.218.78/IFA-server/storage/app/public/file-managers/13/Demo%20C%C3%A2u%20h%E1%BB%8Fi%20-%20Thu%20-%20Scorm%201.2/story_html5.html?lms=1'></iframe>
    </div>
  )
}

export default LMS