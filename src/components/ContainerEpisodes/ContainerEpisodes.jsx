import React from 'react'
import CardEpisodes from '../CardEpisodes/CardEpisodes';
import styles from './ContainerEpisodes.module.css';



const ContainerEpisodes = ({epToRender}) => {
  return (
    <div className={styles.containerEpisodes}>
      {epToRender?.map((element) => <CardEpisodes epToRender={element} key = {element.id}/>)}
    </div>
  )
}

export default ContainerEpisodes


