import React, { useEffect, useState } from 'react'
import { Issue } from './Issue'
import './Issue.scss'

export const Issues = () => {
    const [issues, setIssues] = useState(null);
    const [check, setCheck] = useState(true)
    useEffect(()=>{
            fetch("http://localhost:8000/issues")
                .then(res=>{
                    return res.json();
                })
                .then((data)=>{
                    setCheck(false)
                    setIssues(data);
                })
                .catch((err)=>{
                    console.log(err.message)
                })
    },[])
  return (
    <div ><div className='gitissues'><h2 style={{backgroundColor:'white'}}>Git Issues</h2></div>
    {check && <div className='check'>loading...</div>}
    <div className='Issues'>
        {issues &&
            issues.map(issue=>{
                return (
                    <Issue key={issue.id}
                    id={issue.id} 
                    text={issue.text} 
                    isOpen={issue.isOpen} 
                    number={issue.number} 
                    badges={issue.badges} />
                )
            })
        }
    </div>
    </div>
  )
}
