import React from "react";
import avatar from "../../assets/img/avatar/avatar.png";
import { useState, useEffect } from "react";
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://byxqextqmaciupdsfcjh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5eHFleHRxbWFjaXVwZHNmY2poIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDg1MTc3NTIsImV4cCI6MTk2NDA5Mzc1Mn0.-TMpLYhoChEIHPBI9Ixpj8m_zr6xJ57byNLbQiOl0QI'
const supabase = createClient(supabaseUrl, supabaseKey)

const DefaultLayoutPage  = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    getContent()
  },[])

  const getContent = async () => {
    const { data, error } = await supabase
      .from('tsanrofess')
      .select('*')
      .order('id', { ascending: false })
    console.log(data)
    setContent(data)
  }
  
  
  
  const renderContent = (data, index,) => {
    return(
     <div className="card" key={index}> 
       <div className="media">
         <div className="mt-3 ml-3">
         <img className="align-self-start mr-3 mb-3" src={avatar} style={{width: '50px', height: '50px'}}></img>
         </div>
         <div className="media-body" id="isi">
           <h5 className="mt-3">{data.tipe}</h5>
           <div className="mr-2">
             <p style={{fontSize: '16px'}}>{data.pesan}</p>
             <div className="mb-3">
               <h3 style={{fontSize: '13px', opacity: ".7"}}>
                  {new Intl.DateTimeFormat('id', { 
                    month: 'long', 
                    day: '2-digit',
                    year: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                  }).format(Date.parse(data.created_at))}
               </h3>
             </div>
           </div>
         </div>
       </div>
     </div> 
    );
    
  }
    
  return (
    <div className="main-content">
    <section className="section">
      <div className="section-header">
        <h1>Menfess</h1>
        <div className="section-header-breadcrumb">
          <div className="breadcrumb-item active">
            <a href="#">Dashboard</a>
          </div>
          <div className="breadcrumb-item">
            <a href="#">Pesan</a>
          </div>
          <div className="breadcrumb-item">Menfess</div>
        </div>
      </div>
      <div className="section-body">
        <div className="container-fluid">
        {content.map(renderContent)}
      </div>
      </div>
    </section>
    </div>
  );
}

export default DefaultLayoutPage;
