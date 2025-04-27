import { useEffect, useState } from "react";
import { apiDragonBall } from "./api/api";

import { Card } from "./components/card";
import { Menu } from "./components/menu";

import style from "./Req.module.css";
import menuStyle from "./components/menu.module.css";

import logoApi from "./assets/logo.png";

export default function Req() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState("");

  const [erro, setErro] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => { 
    // console.log("Pag atual", page);
    setLoading(true);
    apiDragonBall.get(`/characters?page=${page}`).then((res) => {
       // console.log("resposta da api", res);
        // console.log("res.data:", res.data)
        //console.log("res.data.results: ", res.data ? res.data.results : 'res.data is undefined')
        setData(res.data && res.data.items ? res.data.items : []);
        setLoading(false);
        console.log(res.data.results);
      })
      .catch((error) => {
        setLoading(false)
        if (error.response && error.response.status === 404) {
          setErro(true);
        } else {
         console.error("erro na chamada", error);
     }
      });
  }, [page]);

  return (  
    <>
      <Menu option01={<a href="/*" className={menuStyle.navLink}>Start</a>}/>

      <section className={style.wrapPage}>
          <img src={logoApi} alt="logoApi" className={style.logoApi} height={"80px"} width={"auto"}/>
        <h1 className={style.titleApi}>Dragon Ball </h1>
        <div className={style.containerInput}>
          <input type="text" placeholder="Write a pag (01 the 06" value={page} onChange={(e) => setPage(e.target.value)}/>
          {erro && <p>Pag not found</p>}
        </div>
        <div className={style.wrapCards}>
        {loading ? (
            <p>Wait here, loading characters...</p> 
          ) : (
            Array.isArray(data) && data.length > 0 ? (
              data.map((item, index) => (
                <div key={index}>
                  <Card
                    name={item.name}
                    image={item.image}
                    Qi={item.Qi}
                    maxQi={item.maxQi}
                    race={item.race}
                    gender={item.gender}
                    affiliation={item.affiliation}
                  />
                </div>
              ))
            ) : (
              <p>No character found this pag</p>
            )
          )}
        </div>
      </section>
    </>
  );
}
