import React, { Component, useState, useEffect, useRef } from "react";
import { ChartGeneral } from "./GraphGeneralDashboard/ChartGeneral";
import { createClient } from '@supabase/supabase-js'
import {render} from 'react-dom'
import Chart from "chart.js";


const supabaseUrl = 'https://byxqextqmaciupdsfcjh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5eHFleHRxbWFjaXVwZHNmY2poIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDg1MTc3NTIsImV4cCI6MTk2NDA5Mzc1Mn0.-TMpLYhoChEIHPBI9Ixpj8m_zr6xJ57byNLbQiOl0QI'
const supabase = createClient(supabaseUrl, supabaseKey)

export const GeneralDashboard = () => {
  const [total, setTotal] = useState([0]);
  const [menfess, setMenfes] = useState([0]);
  const [kritik, setKritik] = useState([0]);
  const [materi, setMateri] = useState([0]);

  useEffect(() => {
    getTotal()
    getMenfes()
    getKritik()
    getMateri()
  },[])

  const getTotal = async () => {
    const { data, error } = await supabase
      .from('tsanrofess')
      .select('id')
    setTotal(data.length)
  }
  const getMenfes = async () => {
    const { data, error } = await supabase
      .from('tsanrofess')
      .select('tipe')
      .eq('tipe', 'Menfes')
      
    setMenfes(data.length)
    
  }

  const getKritik = async () => {
    const { data, error } = await supabase
      .from('tsanrofess')
      .select('tipe')
      .eq('tipe', 'Kritik Dan Saran')
    setKritik(data.length)
  }

  const getMateri = async () => {
    const { data, error } = await supabase
      .from('tsanrofess')
      .select('tipe')
      .eq('tipe', 'Pelajaran Atau Materi')
    setMateri(data.length)
  }



  ChartGeneral();
  return (
    <div className="main-content">
      <section className="section">
        <div className="section-header">
          <h1>Dashboard</h1>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card card-statistic-1">
              <div className="card-icon bg-primary">
                <i className="fas fa-comments"></i>
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>Total Pesan</h4>
                </div>
                <div className="card-body">{total}</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card card-statistic-1">
              <div className="card-icon bg-danger">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>Menfess</h4>
                </div>
                <div className="card-body">{menfess}</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card card-statistic-1">
              <div className="card-icon bg-warning">
                <i className="fas fa-pen-to-square"></i>
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>Kritik Dan Saran</h4>
                </div>
                <div className="card-body">{kritik}</div>
              </div>
            </div>
          </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="card card-statistic-1">
                <div className="card-icon bg-success">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <div className="card-wrap">
                  <div className="card-header">
                    <h4>Pelajaran Atau Materi</h4>
                  </div>
                  <div className="card-body">{materi}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-12 col-12 col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h4>Statistics</h4>
                  <div className="card-header-action">
                    <div className="btn">
                      <a href="#" className="btn btn-primary">
                        Week
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <canvas id="myChart" height="200"></canvas>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12 col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h4>Recent Activities</h4>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled list-unstyled-border">
                    <li className="media">
                      <img
                        className="mr-3 rounded-circle"
                        width="50"
                        src="../assets/img/avatar/avatar-1.png"
                        alt="avatar"
                      />
                      <div className="media-body">
                        <div className="float-right text-primary">Now</div>
                        <div className="media-title">Farhan A Mujib</div>
                        <span className="text-small text-muted">
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin.
                        </span>
                      </div>
                    </li>
                    <li className="media">
                      <img
                        className="mr-3 rounded-circle"
                        width="50"
                        src="../assets/img/avatar/avatar-2.png"
                        alt="avatar"
                        />
                      <div className="media-body">
                        <div className="float-right">12m</div>
                        <div className="media-title">Ujang Maman</div>
                        <span className="text-small text-muted">
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin.
                        </span>
                      </div>
                    </li>
                    <li className="media">
                      <img
                        className="mr-3 rounded-circle"
                        width="50"
                        src="../assets/img/avatar/avatar-3.png"
                        alt="avatar"
                        />
                      <div className="media-body">
                        <div className="float-right">17m</div>
                        <div className="media-title">Rizal Fakhri</div>
                        <span className="text-small text-muted">
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin.
                        </span>
                      </div>
                    </li>
                    <li className="media">
                      <img
                        className="mr-3 rounded-circle"
                        width="50"
                        src="../assets/img/avatar/avatar-4.png"
                        alt="avatar"
                        />
                      <div className="media-body">
                        <div className="float-right">21m</div>
                        <div className="media-title">Alfa Zulkarnain</div>
                        <span className="text-small text-muted">
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin.
                        </span>
                      </div>
                    </li>
                  </ul>
                  <div className="text-center pt-1 pb-1">
                    <a href="/pesan" className="btn btn-primary btn-lg btn-round">
                      View All
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
  


export default GeneralDashboard;
