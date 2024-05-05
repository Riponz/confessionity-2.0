import React from 'react'
import { useNavigate } from 'react-router-dom'

function GroupCard({ groupname, no, desc, gid }) {  


    const str = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam non nulla quod expedita maxime eveniet, doloribus rerum consequatur culpa rem iusto, sequi omnis, tempora officiis molestiae! Impedit, autem dolor perferendis sequi molestias eius alias. Perferendis consequatur harum odio quidem quod illum odit eaque labore delectus voluptatum accusamus laborum, excepturi incidunt."
    return (
        <>
            <div className='w-full h-max my-3 p-5'>
                <div>
                    <div className="name font-bold text-xl">{groupname}</div>
                    <div className="members font-medium text-base">{no} members</div>
                </div>
                <div className="desc">{desc}</div>
                <div className="topics"></div>
            </div>
        </>
    )
}

export default GroupCard