import Head from "next/head"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Image from "next/image"

import styles from "../styles/Page.module.scss"
import articleImage from "../public/article-image_1.png"
import articleGif from "../public/article-design-process.gif"

export default function HardSystems() {

  const title = "Bikelanes from Amsterdam to New York City"
  const subtitle = "Urban Data"

  return (
    <div className={styles.container}>
      <Head>
        <title>{title} | {subtitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        title="Urban Data"
        subtitle="Final Project"
        meta="120321 - LK545 & DV239 "
      />
      <main>
        <div className="dataviz">
          <iframe
            id={styles.datavizFrame}
            title="Inline Hard Systems Map"
            // src="./kepler2.html"
          />
        </div>

        <section className={styles.content}>
          <header className={styles.articleHeader}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{subtitle}</p>
          </header>
          <article className={styles.articleBody}>
            <p>
              In 2019, the New York Times published an{" "}
              <a href="https://www.nytimes.com/2019/12/06/nyregion/linknyc-wifi-connections.html">
                article
              </a>{" "}
              addressing the inequalities of the public WiFi system in New York.
              The author, Annie Correal, stated that "LinkNYC was supposed to
              digitally unite the city, but the neighborhoods that need it the
              most have been left out." Following this statement, we used
              geospatial data to visualize the story of the LinkNYC Kiosks'
              locations and inequality across the city. Moreover, we identified
              this digital system's different elements and described the
              visualization's iterative process.
            </p>

            <h3>Acknowledgment</h3>
            <p>
              At the beginning of our process, we questioned whether NYC Link
              Kiosks are a Hard or Soft System. Since the physical structure is
              part of an interconnected network of agents, nodes, and flows, we
              decided to classify it as a Hard System. However, we acknowledge
              that this is a topic for debate and are open to discussing it
              further.
            </p>
            <div className={styles.contentBlock}>
              <Image
                src={articleImage}
                alt="Smiling woman next the LinkNYC booth"
              />
              <figcaption>
                Fig 1. LinkNYC physical booth in New York.{" "}
                <a href="https://www.link.nyc/index.html">Source</a>
              </figcaption>
            </div>

            <h3>Analysis</h3>
            <p>
              The LinkNYC system is a physical communication network, replacing
              the payphone booths in New York City, USA. Their{" "}
              <a href="https://www.link.nyc/">website</a> states that "Each Link
              provides super fast, free public WiFi, phone calls, device
              charging, and a tablet for access to city services, maps and
              directions." Next to being a public access system, the screens
              function as advertising space and{" "}
              <a href="https://www.link.nyc/faq.html#funding">
                generate millions in revenue
              </a>{" "}
              for the city.
            </p>
            <div className={styles.contentBlock}>
              <ul>
                <li>
                  <b>Network:</b> the data transfers
                </li>
                <li>
                  <b>Nodes:</b> the physical kiosks connected to data
                </li>
                <li>
                  <b>Agents:</b> people interactions with the physical booths
                </li>
                <li>
                  <b>Flows:</b> interactions with the touchscreen, WiFi, or
                  cellular network
                </li>
              </ul>
            </div>
            <h3>Process</h3>
            <p>
              To kickstart the project, we researched controversial data debates
              in the news the past year to find interesting topics. Also, we
              required inspiration from various interactive visualizations by
              other academia. Our process was iterative but best described as
              following:
            </p>
            <div className={styles.contentBlock}>
              <ol>
                <li>
                  <b>Create a challenge:</b> "Can we visualize if the NYC public
                  WiFi access points are accessible for those who need them the
                  most?"
                </li>
                <li>
                  <b>Gather supporting datasets:</b> retrieved from NYCOpenData
                  & US Census
                </li>
                <li>
                  <b>Analyze datasets::</b> discover the quality of data,
                  location mapping, + the possibility to map a neighborhood's
                  income or inequality level.
                </li>
                <li>
                  <b>Find fitting tools:</b> research tools that feel familiar
                  (Javascript, D3js, Mapbox, and ThreeJS) or completely new
                  (ArcGIS, Carto, Geopandas, or Keplar).
                </li>
                <li>
                  <b>Inspiration and art direction:</b> gather other geospatial
                  data visualizations that are functional yet aesthetically
                  pleasing.
                </li>
                <li>
                  <b>Proof of concept:</b> decide on a tool, dataset, storyline,
                  and angle. Combine this as quickly as possible to create a
                  first prototype to show the proof of concept.
                </li>
                <li>
                  <b>Interface Design:</b> from a User Interface (UI) and User
                  Experience perspective (UX), we decided to wrap the data
                  visualization and written story in a website to give users a
                  consistent digital experience. Therefore, we designed an
                  interface in Sketch.
                </li>
                <li>
                  <b>Data visualization:</b> start building, layering, and
                  improving data in the visualization as a standalone product if
                  we walk into any bugs or unforeseen problems.
                </li>
                <li>
                  <b>Frontend Development:</b> create a simplistic wrapper
                  allowing the visualization and report to be inserted into a
                  custom-built website.
                </li>
                <li>
                  <b>Backend Development:</b> synchronize data with the frontend
                  and host the datasets on a personal server to be future-proof.
                </li>
                <li>
                  <b>Launch & Test:</b> deploy the website to a custom server
                  and publicly assign a URL to share the website. Test the
                  website on multiple
                </li>
              </ol>
            </div>

            <div className={styles.contentBlock}>
              <Image src={articleGif} alt="Process GIF of iterations" />

              <figcaption>
                Fig 2. Iterative process throughout trying different tools,
                methods and styles.
              </figcaption>
            </div>
            <h3>Features</h3>
            <p>
              The final data visualization is a production-ready web application
              that embeds an interactive map.
            </p>
            <div className={styles.contentBlock}>
              <ul>
                <li>
                  A dataset containing all{" "}
                  <a href="https://data.cityofnewyork.us/Social-Services/LinkNYC-Locations/s4kf-3yrf">
                    LinkNYC Locations
                  </a>{" "}
                  to map the physical booths
                </li>
                <li>
                  A dataset to map the{" "}
                  <a href="https://data.cityofnewyork.us/Transportation/Subway-Lines/3qz8-muuu">
                    NYC Subway
                  </a>{" "}
                  to create a user context for patterns in another
                  location-based dataset
                </li>
                <li>
                  Interactive geospatial data visualization in{" "}
                  <a href="https://kepler.gl/">Kepler.gl</a>
                </li>
                <li>
                  Fully responsive web application in{" "}
                  <a href="https://reactjs.org/">ReactJS</a> and{" "}
                  <a href="https://nextjs.org/">NextJS</a> hosted on a publicly
                  available URL with <a href="https://vercel.com/">Vercel</a> to
                  enable self-hosted datasets.
                </li>
                <li>Custom Mapbox and D3js (Javascript) integration-ready</li>
                <li>Over 1869 data points mapped in a 3D canvas in WebGL</li>
                <li>
                  <b>Important:</b>
                  However, the visual is currently missing a fitting dataset for
                  mapping inequality
                </li>
              </ul>
            </div>
            <h3>Conclusion</h3>
            <p>
              The current visualization lacks a straightforward dataset to map
              inequality. Thus, we can not establish a correlation between the
              location of the LinkNYCs and its equality to the neighborhood.
            </p>
            <p>
              During the second iteration, it became clear that Census Median
              Household Income did not represent inequality necessarily. After
              removing the dataset, we did not find a relevant dataset to
              prevent bias-based solely on income. However, we discovered that
              the equation to measure inequality is exceptionally complicated.
              As a result, we reached out to the{" "}
              <a href="https://inequality.media.mit.edu/#">
                Atlas of Inequality
              </a>{" "}
              team of the MIT Media Lab in the hope of getting access to their
              highly accurate measurement endpoints of location-based
              inequality. If we aquire this data, we hope to merge the current
              visualization with their data points. Eventually, we aim to create
              an engaging story to explain if the neighborhoods that needed the
              most public WiFi have been left out.
            </p>
            <div className={styles.articleClosing}>
              <ul>
                <li>Daan van der Zwaag</li>
                <li>
                  <a href="mailto:dv239@cornell.edu">dv239@cornell.edu</a>
                </li>
                <li>21st of September 2021</li>
                <li>Assignment 1: Hard Systems</li>
                <li>INFO5410 Urban Systems by Michael Samuelian</li>
                <li>
                  Dual MS Urban Tech at Jacobs Technion-Cornell Institute, New
                  York City
                </li>
              </ul>
            </div>
          </article>
        </section>
      </main>

      <Footer
        showlinks
        loomLink="https://www.loom.com/share/a1711a6461d34537ac8b4cc08175edb5"
      />
    </div>
  )
}
