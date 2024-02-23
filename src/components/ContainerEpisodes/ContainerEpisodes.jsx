import React from 'react'
import CardEpisodes from '../cardEpisodes/CardEpisodes.jsx';
import styles from './ContainerEpisodes.module.css';



const ContainerEpisodes = ({epToRender}) => {
  return (
    <div className={styles.containerEpisodes}>
      {epToRender?.map((element) => <CardEpisodes epToRender={element} key = {element.id}/>)}
    </div>
  )
}

export default ContainerEpisodes


