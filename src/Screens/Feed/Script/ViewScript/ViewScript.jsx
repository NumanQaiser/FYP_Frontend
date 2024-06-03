import React, { useEffect, useState } from 'react'
import ScriptBox from '../../../../Components/ScriptBox/ScriptBox'
import { getScript } from '../../../../Configuration/API\'s/Script'
import { AppContext, useAppContext } from '../../../../StateManagement/Context'
import Skeleton from 'react-loading-skeleton';

function ViewScript({ type }) {
    const { userData } = useAppContext(AppContext);
    const [loading, setLoading] = useState(false);
    const [reponse, setResponse] = useState(false);
    const [list, setList] = useState([])
    const getScriptList = async () => {
        const response = await getScript(type == "my" ? userData._id : "all");
        setLoading(true)
        console.log(response)
        if (response?.status === 200) {
            setLoading(false)
            setList(response?.data?.Data)

        }
    }

    useEffect(() => {

        getScriptList();
    }, [type])
    return (
        <div style={{backgroundColor:""}}>
            {
                loading ?
                    <Skeleton count={20} />
                    :
                    <div className='row ms-1'>
                        <p className='fs-3 fw-bold text-underline'>
                            {type == "my" ?
                                "Your personal"
                                :
                                "Community"
                            }
                            <span className='text-danger'>  Scripts</span>
                        </p>
                        {
                            list?.map((item) => (
                                <>
                                    <ScriptBox item={item} id={userData?._id} />
                                </>
                            ))
                        }
                    </div>


            }
        </div>
    )
}

export default ViewScript
