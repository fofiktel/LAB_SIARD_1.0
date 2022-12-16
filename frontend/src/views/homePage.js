import { useContext,useState,useEffect } from "react";
import AuthContext from "../context/AuthContext";
import PostTemplate from "../components/postTemplate"

const Home = () => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [themeValue,setThemeValue] = useState([])
  const [yearValue,setYearValue] = useState([])

  const handleChangeTheme=(event)=>{
      if(event.target.checked){
          setThemeValue([...themeValue,event.target.value])
          console.log(themeValue,event.target.value)
      }
      else{
          setThemeValue(themeValue.filter(el => el!== event.target.value

          ))
          console.log('-'+event.target.value)
      }

  }

  const handleChangeYear = (event)=>{
       if(event.target.checked){
          setYearValue([...yearValue,event.target.value])

      }
      else{
          setYearValue(yearValue.filter(el => el!== event.target.value

          ))

      }
  }


  useEffect(() => {
    let str = "?"

    if (themeValue.length !==0){
        themeValue.forEach((el,idx)=>{
            if(idx ===0){
                str+='theme='
            }
            str+=el+','
    })
        str = str.slice(0,-1)
        str+='&'
    }

    if (yearValue.length !==0){
        yearValue.forEach((el,idx)=>{
            if(idx ===0){
                str+='published_year='
            }
            str+=el+','
    })
        str = str.slice(0,-1)
        str+='&'
    }

    console.log(str)
    fetch("http://127.0.0.1:8000/api/posts/"+str)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [themeValue,yearValue])

    if(error){
        return(
            <section>
            <div>Mistake {error.message}</div>
            </section>
        );
    } else if(!isLoaded){
        return(
            <section>
            <div>Loading...</div>
            </section>
        );
    }else{
         return(
            <section>
                <div className="parent">
                    <div className="inner-left">
                        <div>
                            <input name="food" type="checkbox" value="Food" onChange={handleChangeTheme}/>
                            <label htmlFor="food">Food</label>
                        </div>
                        <div>
        
                            <input name="programming" type="checkbox" value="Programming" onChange={handleChangeTheme}/>
                            <label htmlFor="programming">Programming</label>
                        </div>
                    </div>
                    <div className="inner-right">
                        <div>
                            <input name="2021" type="checkbox" value="2021" onChange={handleChangeYear}/>
                            <label htmlFor="food">2021</label>
                        </div>
                        <div>

                            <input name="2020" type="checkbox" value="2020" onChange={handleChangeYear}/>
                            <label htmlFor="2020">2020</label>
                        </div>
                    </div>
                </div>
                

            <ul>
                <PostTemplate items = {items}/>

            </ul>
            </section>

        );
    }
};

export default Home;
