import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <header className="profile-header">
        <h1>Zhen Yu Chou</h1>
        <h2>周朕聿</h2>
        <h3>淡江大學資訊管理學系三年級</h3>
        <p>這是課程作業!!</p>
      </header>

      <div className="content">
        <div className="left-side">
          <section className="skills-section card">
            <h4>網路程式設計課程</h4>
            <ul>
              <li>後端程式設計</li>
              <li>Node.js</li>
              <li>伺服器建設</li>
              <li>數據庫操作與 API 操作</li>
            </ul>
          </section>

          <section className="contact-section card">
            <h4>淡江大學</h4>
            <ul>
              <li><strong>地址:</strong> 251新北市淡水區英專路151號</li>
              <li><strong>電話:</strong> 02 2621 5656</li>
            </ul>
          </section>

          <section className="experience-section card">
            <h4>網頁程式設計課程</h4>
            <ul>
              <li><strong>課程初期</strong>
                <ul>
                  <li>開發工具的安裝與設定</li>
                  <li>HTML語言的基礎</li>
                </ul>
              </li>
              <li><strong>課程後期</strong>
                <ul>
                  <li>後端程式設計</li>
                  <li>Node.js</li>
                  <li>伺服器建設、數據庫操作與 API 操作</li>
                </ul>
              </li>
              <li><strong>課程期末</strong>
                <ul>
                  <li>實作專案評量</li>
                </ul>
              </li>
            </ul>
          </section>
        </div>

        <div className="right-side">
          <section>
            <p>
              <a href="https://www.im.tku.edu.tw/tw/">這是系網</a>
            </p>

            <img src="images\cat.png" alt="cat" />
          </section>

          <section>
            <p>我的興趣</p>
            <ul>
              <li>籃球</li>
              <li>聽音樂</li>
              <li>看動漫</li>
              <li>睡覺</li>
            </ul>
          </section>

          <section>
            <p>我喜愛的球員</p>
            <ol>
              <li>Lebron James</li>
              <li>Shai Gilgeous-Alexander</li>
              <li>Devin Booker</li>
              <li>Tyrese Haliburton</li>
            </ol>
          </section>
        </div>
      </div>
    </>
  )
}

export default App
