import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import "../RenderIssues.scss"
import { useParams } from 'react-router-dom';

export const RenderIssues = () => {

    const [blogs, setBlogs] = useState([]);
    const [check, setCheck] = useState(true);
    const [comment, setComment]=useState();
    const [isOk, setIsOk]=useState(false);
    const {id} = useParams();
    const url=`http://localhost:8000/issues/`+id
    useEffect(()=>{
        fetch(url)
            .then(res=>{
                return res.json();
            })
            .then((data)=>{
                setCheck(false)
                setBlogs(data);
            })
            .catch((err)=>{
                console.log(err.message)
            })
        },[url])

        const display=()=>{
            setIsOk(true);
        }

  return (
        <div className='render-issues'>
            {check && <div><h2>loading.....</h2></div>}
            {blogs && (
                <div className='blogs-text'>
                    <h2>@ {blogs.text}</h2>
                    <h2>{blogs.number}</h2>
                    <p className='message' style={{backgroundColor:"#e2dfdf"}}>{blogs.message}</p>
                </div>
            )}
            {isOk && <div>{comment}</div>}
            <section style={{backgroundColor: "#fff"}}>
  <div class="container my-5 py-5 text-dark">
    <div class="row d-flex justify-content-center">
      <div class="col-md-10 col-lg-8 col-xl-6">
        <div class="card">
          <div class="card-body p-4">
            <div class="d-flex flex-start w-100">
              <div class="w-100">
                <h5>Add a comment</h5>
                <ul class="rating mb-3" data-mdb-toggle="rating">
                  <li>
                    <i class="far fa-star fa-sm text-danger" title="Bad"></i>
                  </li>
                  <li>
                    <i class="far fa-star fa-sm text-danger" title="Poor"></i>
                  </li>
                  <li>
                    <i class="far fa-star fa-sm text-danger" title="OK"></i>
                  </li>
                  <li>
                    <i class="far fa-star fa-sm text-danger" title="Good"></i>
                  </li>
                  <li>
                    <i class="far fa-star fa-sm text-danger" title="Excellent"></i>
                  </li>
                </ul>
                <div class="form-outline">
                  <textarea class="form-control" id="textAreaExample" rows="4" onChange={(e)=>setComment(e.target.value)}></textarea>
                  <label class="form-label" for="textAreaExample">What is your view?</label>
                </div>
                <div class="d-flex justify-content-between mt-3">
                  <button type="button" class="btn btn-success">cancel</button>
                  <button type="button" class="btn btn-danger" onClick={display}>
                    Send <i class="fas fa-long-arrow-alt-right ms-1"></i>
                  </button>
                  
                    </div>
                </div>
                </div>
            </div>
            </div>
            </div>
            </div>
        </div>
        </section>
            <nav>
                <NavLink to='/'><h4 className='title'>home</h4></NavLink>
            </nav>
        </div>
        
  )
}
