import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import {StorePlayers} from "../../store/ducks/ReducerPlayers/types";

interface Table {
  title: string;
}

const HighestAvgAge = (props: Table) => {

  const [agesTimes, setAgesTimes] = useState<any>(null);

  const topFive = useSelector((state: StorePlayers) => state.players.dataPlayers);

  useEffect(() => {
    const result2 = topFive.reduce((a: any, b: any) => {
      let index = a.findIndex((x: any) => x.team === b.team);
      if (index > -1) {
        a[index].count++;
        a[index].ages += b.age;
        a[index].avg = a[index].ages / a[index].count;
      } else {
        a.push({ team: b.team, count: 1, ages: b.age, avg: b.age });
      }
      return a;
    }, []);
    setAgesTimes(result2);
  }, [topFive]);

  return (
    <table>
      <thead>
        <tr>
          <th>{props.title}</th>
        </tr>
      </thead>
      <tbody>
        {agesTimes !== null &&
          agesTimes.map((item: any, i: any) => (
            <tr key={i}>
              {i < 5 && (
                <>
                  <td>{item.team}</td>
                  <td>{parseFloat(item.avg.toFixed(1))}</td>
                </>
              )}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default HighestAvgAge;
