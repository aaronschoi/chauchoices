import type { ReactElement } from 'react'
import MainLayout from '../../components/MainLayout/MainLayout';
import Image  from 'next/image';
import Table from '../../components/icons/table-v01.svg';
import Chair from '../../components/icons/chair-v01.svg';
import Lighting from '../../components/icons/lighting-v01.svg';
import Sound from '../../components/icons/sound-v01.svg';
import Cost from '../../components/icons/cost-v01.svg';
import Outlet from '../../components/icons/outlet-v01.svg';
import Food from '../../components/icons/food-v01.svg';
import Bathroom from '../../components/icons/bathroom-v01.svg';

export default function ExamplePost() {
  const styles = {
    image: {
      height: "300px",
      backgroundColor: 'lightblue',
      borderRadius: '20px 20px 0 0'
    },
    title: {
      fontSize: "50px",
      fontWeight: 700,
      textAlign: 'center',
      margin: '10px 0'
    },
    description: {
      margin: '10px 0'
    },
    headline:{
      fontSize: '30px',
      fontWeight: 500,
      margin: '10px 0'
    },
    ratings:{
      margin: '0 auto',
      backgroundColor: 'lightcoral',
      borderRadius: '20px',
      padding: '10px',
      maxWidth: '500px'
    },
    section: {
      backgroundColor: 'lightgreen',
      height: '300px',
      margin: '50px 0',
      padding: '20px',
      textAlign: 'center'
    },
    sectionTitle:{
      textAlign: 'center',
      fontSize: '24px',
      fontWeight: 700,
      textTransform: 'uppercase'
    },
    diagram: {
      width: '100%',
      height: '200px',
      backgroundColor: 'green'
    }
  }

  const ratingIcons = [
    Table,
    Chair,
    Lighting,
    Sound,
    Cost,
    Outlet,
    Food,
    Bathroom
  ]

  return (
    <div>
      <div style={styles.image}>
        Image
      </div>
      <h1 style={styles.title}>Title</h1>
      <p style={styles.description}>descriptions</p>
      <h2 style={styles.headline}>headline</h2>
      <div style={styles.ratings}>
        <h3 style={styles.sectionTitle}>Ratings</h3>
        {
          ratingIcons.map((icon, idx) => {
            return(
              <div key={idx} style={{margin: '20px'}}>
                <h3></h3>
                <Image src={icon} height={30} width={30}/>
              </div>
            )
          })
        }
      </div>
      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>Tables</h3>
        <div style={styles.diagram}>
          diagram
        </div>
        <p>table description</p>
      </section>
      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>Chairs</h3>
        <div style={styles.diagram}>
          diagram
        </div>
        <p>chair description</p>
      </section>
      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>Ambience</h3>
      </section>
      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>Barrier To Entry</h3>
      </section>
      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>Amenities</h3>
      </section>
    </div>
  )
}

ExamplePost.getLayout = function getLayout(post: ReactElement) {
  return (
    <MainLayout>
      {post}
    </MainLayout>
  )
}