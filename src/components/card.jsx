import style from './card.module.css'

export const Card = ({name, image, ki, maxKi, race, gender, affiliation}) => {
    return(
        <>

          <section className={style.apiSection}>
         <img src={image} alt={name} className={style.cardImg}/>
         <div className={style.cardsEstilo}>
         <h1 className={style.title}>{name}</h1>

         <h2 className={style.descTitle}>ki</h2>
         <p>{ki}</p>

         <h2 className={style.descTitle}>Ki Maximo</h2>
         <p>{maxKi}</p>

         <h2 className={style.descTitle}>Raça</h2>
         <p>{race}</p>

         <h2 className={style.descTitle}>Genêro</h2>
         <p>{gender}</p>

         <h2 className={style.descTitle}>Afiliação</h2>
         <p>{affiliation}</p>
         </div>
         
          </section>
        </>
    )
}