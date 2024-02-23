import React from 'react'
import CardEpisodes from '../cardEpisodes/CardEpisodes';
import styles from './ContainerEpisodes.module.css';



const ContainerEpisodes = ({epToRender, season}) => {
  return (
    <div className={styles.containerEpisodes}>
      {epToRender?.map((element) => <CardEpisodes epToRender={element} key = {element.id}/>)}
    </div>
  )
}

export default ContainerEpisodes


