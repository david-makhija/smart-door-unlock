import React, { useEffect, useState } from 'react'

export default function History({ groupId }) {
  const [history, setHistory] = useState([]);
  useEffect(() => {
    const getHistory = async () => {
      try {
        const res = await fetch(`/api/history/${groupId}`);

        const data = await res.json();

        setHistory(data.history);

        return data.history;

        // return data.history;
      } catch (err) {
        console.log(err);
      }
    }
  }, [groupId])

  return (
    <div>History</div>
  )
}
