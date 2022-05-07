import React from "react";
import Page from "../layout/Page";
import { WalletContext } from "../context/Wallet";
import { useContext } from "react";
import FormField from "../project/FormField";

export default function Create() {
    const {account} = useContext(WalletContext);
    console.log("adresse = ", account);
    if (account) {
        return (
            <Page>
                Form to create a crowfunding<br/><br/>
                <form>
                    <label htmlFor="title"> Project name :</label> <br/>
                    <input type="text" name="Name" style={{width:"200px" }}></input><br/><br/>
                    <label htmlFor="title"> Description :</label><br/>
                    <input type="text" name="Name" style={{width:"300px", height:"200px"}}></input><br/><br/>
                    
                    <FormField type="number" name="Name" width="200px" title="Goal :" display="inline-block"/>
                    <FormField type="text" name="Name" width="200px" title="token :" display="inline-block" marginLeft="2%"/>

                    {/* <label htmlFor="title">Goal :</label>
                    <label htmlFor="title">token :</label> <br/>
                    <input type="number" name="Name" style={{width:"200px" }}></input>
                    <input type="text" name="Name" style={{width:"200px" }}></input><br/><br/>
                    */}
                    <br/><button type="submit">Create my Project</button> 
                </form>

                {/* <form onSubmit={handleSubmit}>

                    <label htmlFor="title"> Sondage : </label>
                    <input name="title" value={title} onChange={handleTitleChange} />

                    <div>
                        Réponses :
                        {answers.map(answer => (<input type="text" name="Name" value={answer.content} onChange={(event) => handleAnswerChange(event, answer)} key={answer.id} />))}
                    </div>


                    <button type="button" onClick={addAnswer} style={{marginRight: '10px'}}>
                        ajouter une réponse
                    </button>

                    <button type="submit">Créer mon sondage</button>
                </form> */}
            </Page>
        )
    } else {
        console.log("not connected");
        return (
            <Page>
                    Connect you to create a project
            </Page>
        )
    }
}