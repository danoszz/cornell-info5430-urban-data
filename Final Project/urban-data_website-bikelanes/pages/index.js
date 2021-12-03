import Head from "next/head"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Image from "next/image"

import styles from "../styles/Page.module.scss"
import imageNetworkGraph from "../public/a2-network-graph.png"
import imageDataTable from "../public/a2-data-table.png"

export default function SoftSystems() {

  const title = "Bikelanes from Amsterdam to New York City"
  const subtitle = "INFO5410 Urban Data"
  const project = "Final Project"
  const authors = "LK545 & DV239"
  const date = "031221"
  const timezone =  Intl.DateTimeFormat().resolvedOptions().timeZone

  return (
    <div className={styles.container}>
      <Head>
        <title>{title} | {subtitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        title={title}
        subtitle={`${project} - ${subtitle}`}
        meta={`${authors} - ${date}`}
      />
      <main>
        <div className="dataviz">
          <iframe
            id={styles.datavizFrame}
            title="Inline Hard Systems Map"
            // src="https://experience.arcgis.com/experience/c301f73c9a64464abf750510bb0da0f2"
          />
        </div>

        <section className={styles.content}>
          <header className={styles.articleHeader}>
            <h1 className={styles.title}>
              {title}
            </h1>
            {/* <p className={styles.description}>{subtitle}</p> */}
          </header>

          <article className={styles.articleBody}>
            <p>
              After moving to New York this year, I wondered what the most
              affordable location in New York is while staying within my student
              budget and close to the F-Train. While this might seem like a
              tedious task and not yet possible, public social-economical data
              can help map location affordability. This data visualization maps
              the relation between income and cost of housing in New York City
              per income group and amount of household members per Census tract.
            </p>
            <p>
              To start this process, we first have to find geospatial data
              around income, housing costs, and other expenses like travel. The
              latter is essential if someone has to take transport twice every
              day they spend money on gas or tickets. So if you live close by
              your work, perhaps a higher rent would be more valuable than
              travel time and travel expense. Also, it is crucial to know the
              definition of a household and its income. A single-parent
              lower-income person would have a different definition of
              affordability than a married young professional couple with a
              higher income range. So knowing these externalities is essential
              to find a fair number to rate a location in its affordability.
            </p>
            <h3>Terminology</h3>
            <p>
              First, define our terminology in exercise. The affordability term
              is simplified for this exercise, and we know that actual
              affordability is more complex than we explained.{" "}
            </p>
            <div className={styles.contentBlock}>
              <ul>
                <li>
                  <b>Median household income (Hi):</b> median monthly income of
                  people in the same census tract in US dollars
                </li>
                <li>
                  <b>Average monthly housing cost (Hc):</b> costs such as rent,
                  mortgage, and utilities in US dollars
                </li>
                <li>
                  <b>Transportation costs (Tc): </b> costs like gas or public
                  transport tickets in US dollars
                </li>
                <li>
                  <b>Number of households (Ht):</b> the number of households in
                  a census tract
                </li>
                <li>
                  <b>Location: </b> geographical location defined by Census
                  tract ID, often a neighborhood, area, or block.
                </li>
                <li>
                  <b>Affordability:</b> the rate of housing costs + travel costs
                  divided by income in ratio to the local median income in the
                  local area <pre>(Hc + Tc) / ((Hi - Ht) * 100)</pre>
                </li>
              </ul>
            </div>
            <h3>Identifying the system</h3>
            <p>
              From here, we can identify the different elements of this soft
              system. For starters, we are talking about{" "}
              <b>social-economical systems</b> since income and costs are being
              used to map the network. The flows are based on the citizens
              moving into the housing and after spending their income, compared
              to people around them on housing and travel costs. Therefore we
              could define the system as follows;
            </p>
            <div className={styles.contentBlock}>
              <ul>
                <li>
                  <b>Network:</b> Housing System in New York
                </li>
                <li>
                  <b>Nodes:</b> Houses
                </li>
                <li>
                  <b>Agents: </b>Residents
                </li>
                <li>
                  <b>Flows:</b> transactions for income, rent, and
                  transportation
                </li>
              </ul>
            </div>

            <div className={styles.contentBlock}>
              <Image
                src={imageNetworkGraph}
                alt="Network graph of New York Housing"
              />
              <figcaption>
                Fig 1. Network Graph of New York City Housing system.
              </figcaption>
            </div>
            <h3>Finding data</h3>
            <p>
              Most of this data can be accumulated by merging multiple public
              datasets. For example,{" "}
              <a href="https://www.census.gov/topics/income-poverty/income/data/tables.html">
                Income Data Table{" "}
              </a>
              (Census, 2020) ,{" "}
              <a href="https://www.census.gov/programs-surveys/acs/">
                American Community Survey{" "}
              </a>
              (Census, 2013-2016) , and{" "}
              <a href="https://www.kaggle.com/paultimothymooney/zillow-house-price-data">
                Zillow Housing Prices{" "}
              </a>
              (Zillow & Kaggle, 2020). However, during our research, we found
              the historical dataset that merged certain factors to determine
              affordability. This national initiative by the HUD Exchange is
              described as follows{" "}
              <quote>
                "
                <a href="https://www.hudexchange.info/programs/location-affordability-index/">
                  The Location Affordability Index (LAI)
                </a>{" "}
                works to close this gap by providing estimates of household
                housing and transportation costs at the neighborhood level along
                with constituent data on the built environment and
                demographics."
              </quote>{" "}
              (HUD, 2020).{" "}
            </p>
            <div className={styles.contentBlock}>
              <Image src={imageDataTable} alt="Dataset in tabular view" />
              <figcaption>Fig 2. The LAI dataset in tabular view</figcaption>
            </div>
            <p>
              Along with the{" "}
              <a href="https://hudgis-hud.opendata.arcgis.com/datasets/location-affordability-index-v-3/explore">
                LAI 2013-2016 dataset
              </a>{" "}
              (1) (HUD, 2019), we will use a local street name index dataset (2)
              to match up to our census tract geospatial data to addresses in
              the city. Also, we need to convert Census numerical FIPS data to
              readable names f.e 047 is Kings County with a TAN Table converter
              dataset (3). Moreover, we could add the subway lines (4) to create
              an interesting visual element through the visualization, but
              adding this data is optional and for personal reasons only.{" "}
            </p>
            <h3>Cleaning the data</h3>
            <p>
              Since the LAI index is data-heavy with a total size of 29,652,726
              (402 * 73,763) thus, we need to clean the data to our project's
              scope. This will optimize the performance later on and make
              calculations easier. Also, having non-numerical data makes the
              User Experience more pleasant.
            </p>
            <div className={styles.contentBlock}>
              <ol>
                <li>
                  There are over 73,763 records (rows); we need only the state
                  of New York, NY, and preferable the five boroughs of New York
                  City.
                </li>
                <li>
                  Preferably, we condense the number of parameters (columns)
                  from 402 to just the required columns.
                </li>
                <li>
                  Convert Census tract numbers to readable names and copy this
                  to the primary data frame.
                </li>
              </ol>
            </div>
            <h3>Visualizing the data</h3>
            <p>
              We are using our custom React web app setup from the last project,{" "}
              <a href="/soft-systems">Hard Systems - NYC Link Kiosks</a>, and
              embedding a new external geospatial storytelling map.
            </p>
            <p>
              Since we learned that using Keplar could sometimes be more
              restrictive, we decided to learn to use ArcGIS Online. After
              taking a short tutorial, it became clear this was the right tool
              for the job and allowed more complex data calculations. After
              loading the three different datasets, we started calculating on
              the fractions and normalizations rates in the data to find a
              tension between aesthetics and practicality. We styled the data
              with SVG filters ap such as blend modes, bloom, and shadows.
              Moreover, a custom color palette was adapted from the last
              exercise and improved the legibility of the dark interface.
            </p>
            <p className={styles.callout}>
              The gray to green gradient in the visual will vary based on
              "Average monthly housing cost divided by Median household income,"
              and the transparency of the field will be determined by "Housing
              and transportation costs as a percent of income for Median-Income
              Family households divided by Number of households."
            </p>
            <h3>Analysis</h3>
            <p>
              If we look at visualization, we can immediately see the network
              structure through the difference in green spots over the map.
              Where a more affordable location indicates a green/yellow zone,
              the gray areas tell us that the nodes in that location are not
              affordable. This is in line with expectations that Manhattan is
              more expensive than the other boroughs. Moreover, it is
              interesting to see spots occurring within a lot of gray areas.
              Perhaps the flows in these spots are not mapped due to a high rate
              of office spaces or industrial zoning.{" "}
            </p>
            <h3>Action-oriented future</h3>
            <p>
              As Andrew Yang, an NYC mayoral candidate said to the{" "}
              <a href="https://www.nytimes.com/2021/06/13/nyregion/affordable-housing-nyc-mayor.html">
                New York Times:{" "}
              </a>
              <quote>
                The system is broken, and we need a new way of delivering
                affordable housing to New Yorkers,"
              </quote>{" "}
              (New York Times, 2021) Perhaps smart-city algorithms can make sure
              affordability rates stay stable throughout specific locations
              where there is a lot of disparity throughout every income group.
              Possibly, by recognizing rate changes over time and predicting
              patterns, certain areas can stay affordable for people who need it
              the most. By automating the zoning process or adjusting
              hyper-local legislation, a data-driven decision-making process can
              help policymakers remain objective. However, since an AI would
              influence daily lives, an ethical board could accurately evaluate
              the open-source models.{" "}
            </p>
            <p>
              Today, I will look at housing in the neighborhoods lit up on the
              map.
            </p>
            <div className={styles.articleClosing}>
              <ul>
                <li>Lars Kouwenhoven (<a href="mailto:lk545@cornell.edu">lk545@cornell.edu</a>)</li>
                <li>Daan van der Zwaag (<a href="mailto:dv239@cornell.edu">dv239@cornell.edu</a>)</li>
                <li>3rd of December 2021</li>
                <li>{project} {subtitle} by Emma Pierson</li>
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
        timezone={timezone}
        loomLink="https://www.loom.com/share/c13a4203305944ed8353d0b466bcd910"
      />
    </div>
  )
}
