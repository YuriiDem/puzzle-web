import * as React from "react"

// import Layout from "../components/layout"
import Layout from '../components/layout/Layout'
import Seo from "../components/seo"
import { Link } from "gatsby"
import UnsphashImg from '../images/unsplash_RFDP7_80v5A.png'

const IndexPage = () => (
  <>
    <Layout>
      <Seo title="Home" />
      <section className="wrapper">
        <div className="index__title">
          <h1><strong>Мы помогаем компаниям создавать свой стиль</strong></h1>
          <p><strong style={{ color: 'black' }}>Мы - студия дизайна и разработки, </strong>
            ориентированная на создание ценных взаимодействий
            с помощью цифровых инноваций.
            Наша цель - произвести на пользователей неизгладимое впечатление,
            которое поможет построить прочные отношения.
          </p>
          <button type="button" className="btn">Наши работы</button>
        </div>
      </section>

      <div className="index__img">
        <img src={UnsphashImg} />
      </div>

      <section className="section">
        <div className="contact-us">
          <h1>Все что вам нужно <br />
            в одном месте</h1>
          <div className="contact-us-blocks">
            <div className="contact-us__item">
              <div className="contact-us__content">
                <h3>интернет маркетинг</h3>
                <p>
                  Сложно сказать, почему явные признаки победы институционализации объявлены
                  нарушающими общечеловеческие нормы этики и морали. Предварительные выводы неутешительны:
                  постоянный количественный рост и сфера нашей активности требует анализа.
                </p>
              </div>
            </div>
            <div className="contact-us__item">
              <div className="contact-us__content">
                <h3>дизайн</h3>
                <p>
                  Сложно сказать, почему явные признаки победы институционализации объявлены
                  нарушающими общечеловеческие нормы этики и морали. Предварительные выводы неутешительны:
                  постоянный количественный рост и сфера нашей активности требует анализа.
                </p>
              </div>
            </div>
          </div>
          <div className="contact-us-blocks">
            <div className="contact-us__item">
              <div className="contact-us__content">
                <h3>разработка веб сайтов</h3>
                <p>
                  Сложно сказать, почему явные признаки победы институционализации объявлены
                  нарушающими общечеловеческие нормы этики и морали. Предварительные выводы неутешительны:
                  постоянный количественный рост и сфера нашей активности требует анализа.
                </p>
              </div>
            </div>
            <div className="contact-us__item">
              <div className="contact-us__content">
                <h3>диджитал решения</h3>
                <p>
                  Сложно сказать, почему явные признаки победы институционализации объявлены
                  нарушающими общечеловеческие нормы этики и морали. Предварительные выводы неутешительны:
                  постоянный количественный рост и сфера нашей активности требует анализа.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="our-works__title">
        <h1>Наши работы</h1>
      </div>
      <div className="our-works">
      </div>
    </Layout>
  </>
)

export default IndexPage
