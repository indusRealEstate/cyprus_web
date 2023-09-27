import axios from "axios";
import { NextResponse, NextRequest } from "next/server";

export async function getExclusiveAgents ()
{
    const res = await fetch(
        "https://indusmanagement.ae/api/agents/get_all_agents.php",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        }
    );

    return await res.json();
}

export async function getAgentDetails ( agent_id )
{
    const res = await axios
        .post( "https://indusmanagement.ae/api/agents/get_agent_details.php", {
            agent_id: agent_id,
        } )
        .catch( function ( error )
        {
            console.log( error );
        } );

    return res.data;
}
