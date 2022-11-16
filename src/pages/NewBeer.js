import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function NewBeer() {

  /* const [showForm, setShowForm] = useState(false); */

  const [reload, setReload] = useState(false);
  const [form, setForm] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });

  const navigate = useNavigate();

  //fetch() -> api do navegador -> requisições http (get, put, pacth, delete, post) -> axios
  //promisses -> async/await

  //useEffect()
  // array de dependencias
  // [] -> vai rodar APENAS uma vez -> quando o componente/pagina for carregado
  // [state] -> toda vez que esse state MUDAR DE VALOR -> o código dentro do useEffect roda novamente.

  function handleReload() {
    // reload = false ----> ! => true
    // reload = true -----> ! => false
    setReload(!reload);
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", form);
      setForm({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: "",
      });
      handleReload();
      toast.success("Cerveja criado com sucesso! :D");
      navigate("/allbeers");
    
    } catch (error) {
      console.log(error);
    }
  }
  console.log(form);

  return (
    <div className="Form-new-beer">
      <h1 className="Add-new-beer"> Add a new beer</h1>

      {(
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={form.name}
            />
          </div>

          <div>
            <label>Tagline</label>
            <input
              type="text"
              name="tagline"
              onChange={handleChange}
              value={form.tagline}
            />
          </div>

          <div>
            <label>description</label>
            <input
              type="text"
              name="description"
              onChange={handleChange}
              value={form.description}
            />
          </div>
          <div>
            <label> first_brewed</label>
            <input
              type="text"
              name="first_brewed"
              onChange={handleChange}
              value={form.first_brewed}
            />
          </div>
          <div>
            <label>Brewers_tips</label>
            <input
              type="text"
              name="brewers_tips"
              onChange={handleChange}
              value={form.brewers_tips}
            />
          </div>
          <div>
            <label>attenuation_level</label>
            <input
              type="number"
              name="attenuation_level"
              onChange={handleChange}
              value={form.attenuation_level}
            />
          </div>

          <div>
            <label>contributed_by</label>
            <input
              type="text"
              name="contributed_by"
              onChange={handleChange}
              value={form.contributed_by}
            />
          </div>

          <button type="submit">Add Beer</button>
        </form>
      )}


    </div>
  );
}
export default NewBeer;
