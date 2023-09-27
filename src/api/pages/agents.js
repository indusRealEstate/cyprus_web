import { NextResponse, NextRequest } from "next/server";
import axios from "axios";

export async function getExclusiveAgents() {
  const res = await fetch(
    "https://indusmanagement.ae/api/agents/get_all_exclusive_agents.php",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return await res.json();
}

export async function getAgentDetails(agent_id) {
  const res = await axios
    .post("https://indusmanagement.ae/api/agents/get_agent_details.php", {
      agent_id: agent_id,
    })
    .catch(function (error) {
      console.log(error);
    });

  return res.data;
}

export async function getAgentListingsLimited4(agent_id, prop_for) {
  const res = await axios
    .post(
      "https://indusmanagement.ae/api/agents/get_agent_listed_properties_limited.php",
      {
        agent_id: agent_id,
        prop_for: prop_for,
      }
    )
    .catch(function (error) {
      console.log(error);
    });

  return res.data;
}
