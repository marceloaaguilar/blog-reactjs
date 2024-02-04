import React from "react";
import { Link } from "react-router-dom";
import Edit from "../images/editar.png"
import Delete from "../images/excluir.png"
import Menu from "../components/Menu";
const Single = () => {

    return (
    <div className='single'>
        <div className="content">
            <img src="https://aquinoticias.com/wp-content/uploads/2023/12/Hulk.jpg.webp"/>
            <div className="user">
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div className="info">
                    <span>Marcelo</span>
                    <p>Posted 2 days ago</p>
                </div>
                <div className="edit">
                    <Link to={`/write?edit=2`}>
                        <img src={Edit} />
                    </Link>
                        <img src={Delete} alt="" srcset="" />
                </div>
            </div>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio recusandae ex non? Fuga, unde consequuntur perferendis nostrum facilis impedit quibusdam nihil laborum! Enim neque sunt autem, explicabo exercitationem distinctio perspiciatis.</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum quasi corrupti eum debitis quod! Vero, voluptate dolores tempore tenetur iusto perspiciatis fugiat ex! Numquam vel blanditiis, cum doloribus beatae tempore.
            Laboriosam repellendus maiores voluptates vero quisquam blanditiis. Doloribus aliquid voluptate inventore nostrum fuga repudiandae quo, corporis animi blanditiis a ad amet reiciendis sint modi! Reiciendis reprehenderit illo veniam a repellendus!
            Nemo at optio architecto quam dolorem temporibus non, voluptates animi quaerat, incidunt eius ducimus vitae repudiandae ex nesciunt esse minima omnis. Delectus vitae odio tenetur eaque. Ratione minus ipsam suscipit.
            Cupiditate in voluptates eveniet non blanditiis voluptatem, aliquid delectus. Facilis, aut. Laboriosam error, fugit amet molestias eius, nisi minus, pariatur dolor quod ullam mollitia voluptas reprehenderit aliquid sed officiis tenetur.
            Unde cum hic eligendi temporibus distinctio. Veritatis eos cumque iusto blanditiis porro provident. Laboriosam quia praesentium dolore beatae quaerat temporibus et nam. Ullam, sapiente iusto numquam nemo rerum expedita nam.
            Quae eveniet, voluptate eos distinctio sed saepe ipsam, sit quos eius eaque amet delectus, ratione officia consequatur soluta et quam rem neque praesentium sunt. Illum quae odio id excepturi neque.</p>
        
        </div>
        <Menu/>
    </div>)
    
}


export default Single