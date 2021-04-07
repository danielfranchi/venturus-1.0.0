import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import {StorePlayers} from "../../store/ducks/ReducerPlayers/types";

interface Table {
  title: string;
}

const LowestAvgAge = (props: Table) => {

  const [agesTimes, setAgesTimes] = useState<any>(null);
  const [lowestSort, setLowestSort] = useState<any>(null);

  const topFive = useSelector((state: StorePlayers) => state.players.dataPlayers);

  useEffect(() => {
    const resultLowest = topFive.reduce((a: any, b: any) => {
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
    setAgesTimes(resultLowest);
  }, [topFive]);

  useEffect(() => {
    if (agesTimes !== null) {
      agesTimes.sort((a: any, b: any) => {
        if (b.avg < a.avg) {
          return 1;
        }
        if (b.avg > a.avg) {
          return -1;
        }
        return 0;
      });
      setLowestSort(agesTimes);
    }
  }, [agesTimes]);

  return (
    <table>
      <thead>
        <tr>
          <th>{props.title}</th>
        </tr>
      </thead>
      <tbody>
        {lowestSort !== null &&
          lowestSort.map((item: any, i: any) => (
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

export default LowestAvgAge;
