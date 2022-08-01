import React, { useEffect, useState } from "react";
import axios from "axios";
import { apitoken } from "../utils";
import { useParams } from "react-router-dom"

export default function Scorecard() {

    const { id } = useParams();

    const [scoreboard, setScoreboard] = useState([])

    const [show, setShow] = useState(false);

    useEffect(() => {
        allscoreboard()
    }, [])

    const allscoreboard = async () => {
        const scoreapi = await axios.get(`https://cricket.sportmonks.com/api/v2.0/fixtures/${id}?api_token=${apitoken}&include=localteam,visitorteam,bowling.team,batting.team,runs.team,bowling.bowler,batting.batsman,batting.bowler,batting.catchstump,scoreboards,lineup`)

        setScoreboard(scoreapi.data.data)
    }
    console.log(scoreboard)

    if (scoreboard.length === 0) {
        return <div className="flex justify-center items-center mt-[80px]"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-loader"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>
        </div>
    }

    return (
        <div className="max-w-[672px] mx-auto  ">
            <div className="flex flex-col justify-center items-center mt-[80px] w-[100%] ">
                <div className="flex  flex-row items-center justify-between w-[100%] px-[20px]">
                    <div className="flex flex-col">
                        <div className=" min-w-[150px] items-start">
                            <label className="text-[11px] font-normal not-italic leading-[1.27] tracking-[0.3px] rounded-sm bg-[#1434a4] text-white py-[3px] px-[5px]">
                                {scoreboard.localteam.code}
                            </label>
                            <label className="text-[11px] font-normal not-italic leading-[1.27] tracking-[0.3px] text-[#787878] m-[5px]">
                                2nd INN
                            </label>
                        </div>
                        <div>
                            <label className="not-italic font-semibold text-black text-[28px] leading-[42px] tracking-[0.14px]">
                                {scoreboard.runs[1].score}/{scoreboard.runs[1].wickets}
                            </label>
                            <label className="text-[12px] text-[#787878] leading-[1.33] tracking-[0.4px] font-semibold not-italic m-[5px]">
                                {scoreboard.runs[1].overs}
                            </label>
                        </div>
                    </div>

                    <div className="w-[24px] ml-3 flex items-center justify-center">
                        <div className="h-[60px] w-[1px] bg-[#e6e7ec]"></div>
                        <div className="w-[24px] h-[24px] leading-[24px] text-[15px] rounded-[50%] bg-[#e6e7ec] flex items-center  justify-center absolute">V</div>
                    </div>
                    <div className="flex flex-col min-w-[150px] items-end">
                        <div className=''>
                            <label className="text-[11px] font-normal not-italic leading-[1.27] tracking-[0.3px] text-[#787878] m-[5px]">
                                1st INN
                            </label>
                            <label className="text-[11px] font-normal not-italic leading-[1.27] tracking-[0.3px] rounded-sm bg-[#1434a4] text-white py-[3px] px-[5px]">
                                {scoreboard.visitorteam.code}
                            </label>

                        </div>
                        <div>
                            <label className="text-[12px] text-[#787878] leading-[1.33] tracking-[0.4px] font-semibold not-italic m-[5px]">
                                {scoreboard.runs[0].overs}
                            </label>
                            <label className="not-italic font-semibold text-black text-[28px] leading-[42px] tracking-[0.14px]">
                                {scoreboard.runs[0].score}/{scoreboard.runs[0].wickets}
                            </label>
                        </div>
                    </div>
                </div>
                <div className="mt-[10px] mb-[15px]">
                    <label className="text-[14px] not-italic text-[#001240] font-semibold leading-[20px] tracking-[0.28px]">
                        {scoreboard.note}
                    </label>
                </div>
            </div>
            <div className="h-[48px] w-[100%] border-t-[1px] border-b-[1px] flex justify-between items-center mx-0">
                <div className="text-[14px] tracking-[0.56px] leading-[1.43] text-[#66718c] font-normal px-[25px] ]">Fantasy</div>
                <div className="text-[14px] tracking-[0.56px] leading-[1.43] text-[#66718c] font-normal px-[25px]">Info</div>
                <div className="text-[14px] tracking-[0.56px] leading-[1.43] text-[#66718c] font-normal px-[25px]">Live</div>
                <div className="text-[14px] tracking-[0.56px] leading-[1.43] text-[#66718c] font-normal px-[25px]">Scorecard</div>
                <div className="text-[14px] tracking-[0.56px] leading-[1.43] text-[#66718c] font-normal px-[25px]">Squad</div>
                <div className="text-[14px] tracking-[0.56px] leading-[1.43] text-[#66718c] font-normal px-[25px]">Highlights
                </div>
            </div>
            <div className="min-h-[500px] w-[100%]">
                <div className="py-[12px] px-[18px] h-[50px] flex justify-between border-b-[1px] bg-[#fafafa]">
                    <div>
                        <label className="text-[16px] not-italic leading-[1.25] font-semibold text-black">
                            {scoreboard.visitorteam.code}
                        </label>
                    </div>
                    <div className="flex items-center">
                        <label className="text-[14px] not-italic leading-[1.25] font-semibold text-black tracking-[0.25px]">
                            {scoreboard.runs[0].score}/{scoreboard.runs[0].wickets}

                        </label>
                        <svg onClick={() => setShow(!show)} className="bg-[#ffb999] rounded-[50%] ml-[25px]" width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" >
                            <path d="M10 6.71a.996.996 0 000 1.41L13.88 12 10 15.88a.996.996 0 101.41 1.41L16 12.7a.996.996 0 000-1.41L11.41 6.7c-.38-.38-1.02-.38-1.41.01z" fill="white">
                            </path>
                        </svg>

                    </div>
                </div>
                {show &&
                    <div className="w-[100%] flex flex-col justify-center items-center">
                        <div className="p-[10px] flex w-[98%] bg-[#fafafa] border-none rounded-[10px] mt-[20px] border text-[#787878] tracking-[1.5px] justify-between">
                            <label className="min-w-[60px] text-[12px] font-normal flex-grow flex-shrink basis-0 leading-[1.5em]">BATSMEN</label>
                            <label className="min-w-[60px] text-[12px] font-semibold">R</label>
                            <label className="min-w-[60px] text-[12px] font-semibold">B</label>
                            <label className="min-w-[60px] text-[12px] font-semibold">4s</label>
                            <label className="min-w-[60px] text-[12px] font-semibold">6s</label>
                            <label className="min-w-[60px] text-[12px] font-semibold">S/R</label>
                        </div>
                        {scoreboard.batting.map((s, i) => {
                            if (s.team_id === scoreboard.visitorteam_id) {
                                return (
                                    <div key={i} className="flex p-[10px] border-b-[1px] w-[98%]">
                                        <div className="flex flex-col justify-center items-start flex-grow flex-shrink basis-0 min-w-0]">
                                            <label className="text-[14px] font-normal tracking-[0.25px] text-[#0081ff] non-italic ">
                                                {s.batsman.fullname}
                                            </label>
                                            <label className="text-[11px] font-normal tracking-[0.3px] text-[#787878] non-italic leading-[1.27] ">
                                                {s.catchstump && "c " + s.catchstump.fullname}
                                                {s.bowler && " b " + s.bowler.fullname}
                                            </label>
                                        </div>
                                        <label className="flex-grow-0 flex-shrink-0 basis-auto min-w-[60px] text-[14px] font-semibold text-[#787878]">
                                            {s.score}
                                        </label>
                                        <label className="flex-grow-0 flex-shrink-0 basis-auto min-w-[60px] text-[14px] font-normal text-[#787878]">
                                            {s.ball}
                                        </label>
                                        <label className="flex-grow-0 flex-shrink-0 basis-auto min-w-[60px] text-[14px] font-normal text-[#787878]">
                                            {s.four_x}
                                        </label>
                                        <label className="flex-grow-0 flex-shrink-0 basis-auto min-w-[60px] text-[14px] font-normal text-[#787878]">
                                            {s.six_x}
                                        </label>
                                        <label className="flex-grow-0 flex-shrink-0 basis-auto min-w-[60px] text-[14px] font-normal text-[#787878]">
                                            {s.rate}
                                        </label>
                                    </div>
                                )
                            }
                        })}
                        <div className="border-b-[1px] p-[10px] w-[98%] flex justify-between items-center" >
                            <label className="text-[14px] non-italic tracking-[0.25px] text-black font-semibold ">
                                Extras
                            </label>
                            <label className="text-[14px] non-italic tracking-[0.25px] text-black font-semibold ">
                                {scoreboard.scoreboards[2].bye + scoreboard.scoreboards[2].leg_bye + scoreboard.scoreboards[2].noball_runs + scoreboard.scoreboards[2].wide + scoreboard.scoreboards[2].penalty}
                                <span className="text-[12px] non-italic tracking-[0.4px] text-[#787878] font-normal leading-[1.33] ml-[5px]">
                                    {/* {scoreboard.scoreboards[0].penalty} */}
                                    (b {scoreboard.scoreboards[2].bye},
                                    lb {scoreboard.scoreboards[2].leg_bye},
                                    nb {scoreboard.scoreboards[2].noball_runs},
                                    w {scoreboard.scoreboards[2].wide},
                                    p {scoreboard.scoreboards[2].penalty}
                                    ) </span>
                            </label>
                        </div>
                        <div className="border-b-[1px] p-[10px] w-[98%] flex justify-between items-center" >
                            <label className="text-[14px] non-italic tracking-[0.25px] text-black font-semibold ">
                                Did Not Bat
                            </label>
                            <label className="text-[12px] non-italic tracking-[0.4px] text-[#787878] font-normal leading-[1.33] ">
                                {scoreboard.lineup.filter(lineup => lineup.lineup.team_id === scoreboard.visitorteam_id).filter(lineup => !scoreboard.batting.map(bat => bat.batsman.fullname).includes(lineup.fullname)).map(lineup => lineup.firstname[0] + " " + lineup.lastname).join(', ')}
                            </label>
                        </div>
                        <div className=" p-[10px] w-[98%] flex justify-between items-center" >
                            <label className="text-[18px] non-italic tracking-[0.5px] text-black font-semibold leading-[1.25] ">
                                Total Score
                            </label>
                            <label className="text-[18px] non-italic tracking-[0.5px] text-black font-semibold leading-[1.25]">
                                {scoreboard.runs[0].score}/{scoreboard.runs[0].wickets}
                                <span className="text-[14px] non-italic tracking-[0.25px] text-[#787878] font-normal  leading-[1.25em]"> (  {scoreboard.runs[0].overs} Overs) </span>
                            </label>
                        </div>
                        <div className="p-[10px] flex w-[98%] bg-[#fafafa] border-none rounded-[10px] mt-[20px] border text-[#787878] tracking-[1.5px] justify-between">
                            <label className="min-w-[60px] text-[12px] font-normal flex-grow flex-shrink basis-0 leading-[1.5em]">BOWLER</label>
                            <label className="min-w-[60px] text-[12px] font-semibold">O</label>
                            <label className="min-w-[60px] text-[12px] font-semibold">M</label>
                            <label className="min-w-[60px] text-[12px] font-semibold">R</label>
                            <label className="min-w-[60px] text-[12px] font-semibold">W</label>
                            <label className="min-w-[60px] text-[12px] font-semibold">ECO</label>
                        </div>
                        {scoreboard.bowling.map((s, i) => {
                            if (s.team_id == scoreboard.localteam_id) {
                                return (
                                    <div key={i} className="flex p-[10px] border-b-[1px] w-[98%]">
                                        <div className="flex flex-col justify-center items-start flex-grow flex-shrink basis-0 min-w-0]">
                                            <label className="text-[14px] font-normal tracking-[0.25px] text-[#0081ff] non-italic ">
                                                {s.bowler.fullname}
                                            </label>
                                        </div>
                                        <label className="flex-grow-0 flex-shrink-0 basis-auto min-w-[60px] text-[14px] font-normal text-[#787878]">
                                            {s.overs}
                                        </label>
                                        <label className="flex-grow-0 flex-shrink-0 basis-auto min-w-[60px] text-[14px] font-normal text-[#787878]">
                                            {s.medians}
                                        </label>
                                        <label className="flex-grow-0 flex-shrink-0 basis-auto min-w-[60px] text-[12px] font-normal text-[#787878]">
                                            {s.runs}
                                        </label>
                                        <label className="flex-grow-0 flex-shrink-0 basis-auto min-w-[60px] text-[14px] font-normal text-[#787878]">
                                            {s.wickets}
                                        </label>
                                        <label className="flex-grow-0 flex-shrink-0 basis-auto min-w-[60px] text-[14px] font-normal text-[#787878] ">
                                            {s.rate}
                                        </label>
                                    </div>
                                )
                            }
                        })}
                        <div className="p-[10px] flex w-[98%] bg-[#fafafa] border-none rounded-[10px] mt-[20px] border text-[#787878] tracking-[1.5px] justify-between">
                            <label className="min-w-[100px] text-[12px] font-normal  leading-[1.5em] flex-grow flex-shrink basis-[0%]">FALL OF WICKETS</label>
                            <label className="min-w-[100px] text-[12px] font-normal flex-grow-0 flex-shrink-0 basis-auto">SCORE</label>
                            <label className="min-w-[100px] text-[12px] font-normal flex-grow-0 flex-shrin-0k basis-auto">OVER</label>
                        </div>
                        {scoreboard.batting.map((s, i) => {
                            if (s.team_id === scoreboard.visitorteam_id)
                                if (s.fow_score !== 0) {
                                    return (
                                        <div key={i} className="flex p-[10px] border-b-[1px] w-[98%]">
                                            <div className="flex flex-col justify-center items-start flex-grow flex-shrink basis-0 min-w-[100px]">
                                                <label className="text-[14px] font-normal tracking-[0.25px] text-[#0081ff] non-italic ">
                                                    {s.batsman.fullname}
                                                </label>
                                            </div>
                                            <label className="min-w-[100px] text-[14px] font-normal flex-grow-0 flex-shrink-0 basis-auto text-[#424040] leading-[1.5em]">
                                                {s.fow_score}
                                            </label>
                                            <label className="min-w-[100px] text-[14px] font-normal flex-grow-0 flex-shrink-0 basis-auto text-[#424040] leading-[1.5em]">
                                                {s.fow_balls}
                                            </label>
                                        </div>
                                    )
                                }
                        })}
                    </div>}
            </div>
            <div className="min-h-[500px] w-[100%]">
                <div className="py-[12px] px-[18px] h-[50px] flex justify-between border-b-[1px] bg-[#fafafa]">
                    <div>
                        <label className="text-[16px] not-italic leading-[1.25] font-semibold text-black">
                            {scoreboard.localteam.code}
                        </label>
                    </div>
                    <div className="flex items-center">
                        <label className="text-[14px] not-italic leading-[1.25] font-semibold text-black tracking-[0.25px]">
                            {scoreboard.runs[1].score}/{scoreboard.runs[1].wickets}

                        </label>
                        <svg className="bg-[#ffb999] rounded-[50%] ml-[25px]" width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" >
                            <path d="M10 6.71a.996.996 0 000 1.41L13.88 12 10 15.88a.996.996 0 101.41 1.41L16 12.7a.996.996 0 000-1.41L11.41 6.7c-.38-.38-1.02-.38-1.41.01z" fill="white">
                            </path>
                        </svg>
                    </div>
                </div>
                <div className="w-[100%] flex flex-col justify-center items-center">
                    <div className="p-[10px] flex w-[98%] bg-[#fafafa] border-none rounded-[10px] mt-[20px] border text-[#787878] tracking-[1.5px] justify-between">
                        <label className="min-w-[60px] text-[12px] font-normal flex-grow flex-shrink basis-0 leading-[1.5em]">BATSMEN</label>
                        <label className="min-w-[60px] text-[12px] font-semibold">R</label>
                        <label className="min-w-[60px] text-[12px] font-semibold">B</label>
                        <label className="min-w-[60px] text-[12px] font-semibold">4s</label>
                        <label className="min-w-[60px] text-[12px] font-semibold">6s</label>
                        <label className="min-w-[60px] text-[12px] font-semibold">S/R</label>
                    </div>
                    {scoreboard.batting.map((s, i) => {
                        if (s.team_id == scoreboard.localteam_id) {
                            return (
                                <div key={i} className="flex p-[10px] border-b-[1px] w-[98%]">
                                    <div className="flex flex-col justify-center items-start flex-grow flex-shrink basis-0 min-w-0]">
                                        <label className="text-[14px] font-normal tracking-[0.25px] text-[#0081ff] non-italic ">
                                            {s.batsman.fullname}
                                        </label>
                                        <label className="text-[11px] font-normal tracking-[0.3px] text-[#787878] non-italic leading-[1.27] ">
                                            {s.catchstump && "c " + s.catchstump.fullname}
                                            {s.bowler && " b " + s.bowler.fullname}
                                        </label>
                                    </div>
                                    <label className="flex-grow-0 flex-shrink-0 basis-auto min-w-[60px] text-[14px] font-semibold text-[#787878]">
                                        {s.score}
                                    </label>
                                    <label className="flex-grow-0 flex-shrink-0 basis-auto min-w-[60px] text-[14px] font-normal text-[#787878]">
                                        {s.ball}
                                    </label>
                                    <label className="flex-grow-0 flex-shrink-0 basis-auto min-w-[60px] text-[12px] font-normal text-[#787878]">
                                        {s.four_x}
                                    </label>
                                    <label className="flex-grow-0 flex-shrink-0 basis-auto min-w-[60px] text-[14px] font-normal text-[#787878]">
                                        {s.six_x}
                                    </label>
                                    <label className="flex-grow-0 flex-shrink-0 basis-auto min-w-[60px] text-[14px] font-normal text-[#787878]">
                                        {s.rate}
                                    </label>
                                </div>
                            )
                        }
                    })}
                    <div className="border-b-[1px] p-[10px] w-[98%] flex justify-between items-center" >
                        <label className="text-[14px] non-italic tracking-[0.25px] text-black font-semibold ">
                            Extras
                        </label>
                        <label className="text-[14px] non-italic tracking-[0.25px] text-black font-semibold ">
                            {scoreboard.scoreboards[0].bye + scoreboard.scoreboards[0].leg_bye + scoreboard.scoreboards[0].noball_runs + scoreboard.scoreboards[0].wide + scoreboard.scoreboards[0].penalty}
                            <span className="text-[12px] non-italic tracking-[0.4px] text-[#787878] font-normal leading-[1.33] ml-[5px]">
                                {/* {scoreboard.scoreboards[0].penalty} */}
                                (b {scoreboard.scoreboards[0].bye},
                                lb {scoreboard.scoreboards[0].leg_bye},
                                nb {scoreboard.scoreboards[0].noball_runs},
                                w {scoreboard.scoreboards[0].wide},
                                p {scoreboard.scoreboards[0].penalty}
                                ) </span>
                        </label>
                    </div>
                    <div className="border-b-[1px] p-[10px] w-[98%] flex justify-between items-center" >
                        <label className="text-[14px] non-italic tracking-[0.25px] text-black font-semibold ">
                            Did Not Bat
                        </label>
                        <label className="text-[12px] non-italic tracking-[0.4px] text-[#787878] font-normal leading-[1.33] ">
                            {scoreboard.lineup.filter(lineup => lineup.lineup.team_id === scoreboard.localteam_id).filter(lineup => !scoreboard.batting.map(bat => bat.batsman.fullname).includes(lineup.fullname)).map(lineup => lineup.firstname[0] + " " + lineup.lastname).join(', ')}
                        </label>
                    </div>
                    <div className=" p-[10px] w-[98%] flex justify-between items-center" >
                        <label className="text-[18px] non-italic tracking-[0.5px] text-black font-semibold leading-[1.25] ">
                            Total Score
                        </label>
                        <label className="text-[18px] non-italic tracking-[0.5px] text-black font-semibold leading-[1.25]">
                            {scoreboard.runs[1].score}/{scoreboard.runs[1].wickets}
                            <span className="text-[14px] non-italic tracking-[0.25px] text-[#787878] font-normal  leading-[1.25em]"> (  {scoreboard.runs[0].overs} Overs) </span>
                        </label>
                    </div>
                    <div className="p-[10px] flex w-[98%] bg-[#fafafa] border-none rounded-[10px] mt-[20px] border text-[#787878] tracking-[1.5px] justify-between">
                        <label className="min-w-[60px] text-[12px] font-normal flex-grow flex-shrink basis-0 leading-[1.5em]">BOWLER</label>
                        <label className="min-w-[60px] text-[12px] font-semibold">O</label>
                        <label className="min-w-[60px] text-[12px] font-semibold">M</label>
                        <label className="min-w-[60px] text-[12px] font-semibold">R</label>
                        <label className="min-w-[60px] text-[12px] font-semibold">W</label>
                        <label className="min-w-[60px] text-[12px] font-semibold">ECO</label>
                    </div>
                    {scoreboard.bowling.map((s, i) => {
                        if (s.team_id === scoreboard.visitorteam_id) {
                            return (
                                <div key={i} className="flex p-[10px] border-b-[1px] w-[98%]">
                                    <div className="flex flex-col justify-center items-start flex-grow flex-shrink basis-0 min-w-0]">
                                        <label className="text-[14px] font-normal tracking-[0.25px] text-[#0081ff] non-italic ">
                                            {s.bowler.fullname}
                                        </label>
                                    </div>
                                    <label className="flex-grow-0 flex-shrink-0 basis-auto min-w-[60px] text-[14px] font-normal text-[#787878]">
                                        {s.overs}
                                    </label>
                                    <label className="flex-grow-0 flex-shrink-0 basis-auto min-w-[60px] text-[14px] font-normal text-[#787878]">
                                        {s.medians}
                                    </label>
                                    <label className="flex-grow-0 flex-shrink-0 basis-auto min-w-[60px] text-[12px] font-normal text-[#787878]">
                                        {s.runs}
                                    </label>
                                    <label className="flex-grow-0 flex-shrink-0 basis-auto min-w-[60px] text-[14px] font-normal text-[#787878]">
                                        {s.wickets}
                                    </label>
                                    <label className="flex-grow-0 flex-shrink-0 basis-auto min-w-[60px] text-[14px] font-normal text-[#787878] ">
                                        {s.rate}
                                    </label>
                                </div>
                            )
                        }
                    })}
                    <div className="p-[10px] flex w-[98%] bg-[#fafafa] border-none rounded-[10px] mt-[20px] border text-[#787878] tracking-[1.5px] justify-between">
                        <label className="min-w-[100px] text-[12px] font-normal  leading-[1.5em] flex-grow flex-shrink basis-[0%]">FALL OF WICKETS</label>
                        <label className="min-w-[100px] text-[12px] font-normal flex-grow-0 flex-shrink-0 basis-auto">SCORE</label>
                        <label className="min-w-[100px] text-[12px] font-normal flex-grow-0 flex-shrin-0k basis-auto">OVER</label>
                    </div>
                    {scoreboard.batting.map((s, i) => {
                        if (s.team_id === scoreboard.localteam_id)
                            if (s.fow_score !== 0) {
                                return (
                                    <div key={i} className="flex p-[10px] border-b-[1px] w-[98%]">
                                        <div className="flex flex-col justify-center items-start flex-grow flex-shrink basis-0 min-w-[100px]">
                                            <label className="text-[14px] font-normal tracking-[0.25px] text-[#0081ff] non-italic ">
                                                {s.batsman.fullname}
                                            </label>
                                        </div>
                                        <label className="min-w-[100px] text-[14px] font-normal flex-grow-0 flex-shrink-0 basis-auto text-[#424040] leading-[1.5em]">
                                            {s.fow_score}
                                        </label>
                                        <label className="min-w-[100px] text-[14px] font-normal flex-grow-0 flex-shrink-0 basis-auto text-[#424040] leading-[1.5em]">
                                            {s.fow_balls}
                                        </label>
                                    </div>
                                )
                            }
                    })}
                </div>
            </div>
        </div>
    )
}