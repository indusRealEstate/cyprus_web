/** @format */

import axios from "axios";
import { NextResponse, NextRequest } from "next/server";

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

export async function getAllAgents(page, limit) {
  const data = {
    pageNumber: page,
    limit: limit,
  };

  const res = await axios
    .post("https://indusmanagement.ae/api/agents/get_all_agents.php", data)
    .catch((error) => {
      console.log(error);
    });

  return await res;
}

export async function getDealingCities() {
  const res = await axios
    .get("https://indusmanagement.ae/api/agents/get_all_dealing_cities.php")
    .catch((error) => {
      console.log(error);
    });

  return await res;
}
