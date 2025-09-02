<script>
    import { dues } from '$lib/utils/helper';
    let one, oneOne, oneOneOne, oneTwo, oneTwoOne, oneTwoTwo, oneTwoThree, oneTwoFour, oneTwoFive, oneThree;
    let two, twoOne, twoTwo, twoThree;
    let three, threeOne;
    let four, fourOne, fourTwo;
    let five, fiveOne;
    let six, sixOne, sixTwo, sixThree;
    let seven, sevenOne, sevenTwo, sevenThree;
    let eight, eightOne;
    let nine, nineOne, nineTwo, nineThree;

    const goToSection = (section) => {
        const top = section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({left: 0, top, behavior: 'smooth'});
    }
</script>

<style>
    .constitution {
        position: relative;
        z-index: 1;
        width: 92%;
        max-width: 800px;
        margin: 8em auto 10em;
    }

    h1 {
        font-size: 2em;
        line-height: 1.2em;
        text-align: center;
        margin: 2em 0 1.5em;
    }

    h2 {
        font-size: 1.5em;
        line-height: 1.2em;
    }

    h3 {
        text-decoration: underline;
        font-size: 1.3em;
        line-height: 1.2em;
    }

    h4 {
        text-decoration: underline;
        margin-left: 2em;
        font-size: 1.2em;
        line-height: 1.2em;
    }

    h5 {
        margin-left: 6em;
        font-size: 0.8em;
        line-height: 1.1em;
    }

    .subBlock {
        margin-left: 2.4em;
    }

    .sectionHeading {
        margin: 4em 0 1.5em;
    }

    .subSectionHeading {
        margin: 1.5em 0 1.5em;
    }

    .underscore {
        text-decoration: underline;
    }

    .right {
        text-align: right;
    }

    .positionMaximums td {
        min-width: 3em;
    }

    .noUnderscore {
        text-decoration: none;
    }

    .clickable {
        cursor: pointer;
    }

    .clickable:hover {
        color: #00316b;
    }

    p {
        color: #777;
    }
</style>

<div class="constitution">
    <h1 class="noUnderscore">LEGENDS LEAGUE CONSTITUTION</h1>
    
    <h2 class="noUnderscore">TABLE OF CONTENTS</h2>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(one)}>Section 1: Roster</h3>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(oneOne)}>1.1 Positional Breakdown</h4>
            <h5 class="noUnderscore clickable" on:click={() => goToSection(oneOneOne)}>1.1.1 Position Maximums</h5>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(oneTwo)}>1.2 Trading</h4>
            <h5 class="noUnderscore clickable" on:click={() => goToSection(oneTwoOne)}>1.2.1 Trade Collusion</h5>
            <h5 class="noUnderscore clickable" on:click={() => goToSection(oneTwoTwo)}>1.2.2 Lending Players Prohibition</h5>
            <h5 class="noUnderscore clickable" on:click={() => goToSection(oneTwoThree)}>1.2.3 Trade Deadline</h5>
            <h5 class="noUnderscore clickable" on:click={() => goToSection(oneTwoFour)}>1.2.4 Trade Restrictions</h5>
            <h5 class="noUnderscore clickable" on:click={() => goToSection(oneTwoFive)}>1.2.5 Veto/Trade Process</h5>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(oneThree)}>1.3 Waiver Wire</h4>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(two)}>Section 2: Drafting</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(twoOne)}>2.1 Draft Order</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(twoTwo)}>2.2 Rookie Drafts</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(twoThree)}>2.3 Draft Day Trades</h4>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(three)}>Section 3: Scoring System</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(threeOne)}>3.1 Voting on Scoring System</h4>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(four)}>Section 4: Postseason</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fourOne)}>4.1 Playoffs</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fourTwo)}>4.2 Playoff Tiebreakers</h4>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(five)}>Section 5: Tanking Policy</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveOne)}>5.1 League Tanking Policy</h4>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(six)}>Section 6: Replacing Managers</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixOne)}>6.1 Removing Managers</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixTwo)}>6.2 Replacing Managers</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixThree)}>6.3 Replacement Incentive</h4>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(seven)}>Section 7: League Finances</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sevenOne)}>7.1 League Dues</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixTwo)}>7.2 Payout</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixThree)}>7.3 Raising Dues</h4>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(eight)}>Section 8: League Voting</h3>

        <h4 class="noUnderscore clickable" on:click={() => goToSection(eightOne)}>8.1 Voting</h4>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(nine)}>Section 9: Misc League Information</h3>

        <h4 class="noUnderscore clickable" on:click={() => goToSection(nineOne)}>9.1 League Makeup</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(nineTwo)}>9.2 Divisions</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(nineThree)}>9.3 Commissioner</h4>
    
    <hr />
    
    <h2 class="sectionHeading" bind:this={one}>Section 1 Roster Breakdown</h2>
    
    <h3 class="subSectionHeading" bind:this={oneOne}>1.1 Positional Breakdown</h3>
    
    <p>16 Total Players</p>
    
    <p class="underscore">Starters</p>
    <ul>
        <li>QB</li>
        <li>RB</li>
        <li>WR</li>
        <li>WR</li>
        <li>TE</li>
        <li>FLEX (RB/WR/TE)</li>
        <li>FLEX (RB/WR/TE)</li>
        <li>D/ST</li>
    </ul>
    
    <p>6 Bench (Expanded by 5 between the keague draft and start of regular season)</p>

    <p>2 IR Spots (Player must be labeled as IR or Out in the Sleeper App)</p>
    
    
    <h3 class="subSectionHeading" bind:this={oneTwo}>1.2 Trading</h3>
    
    <p>Trading of players is allowed. Trades will process immediately and will be reversed if vetoed or under investigation for collusion. Tradable assets include players and FAAB $.</p>
    
    <h4 bind:this={oneTwoOne}>1.2.1 Trade Collusion</h4>
    <div class="subBlock">
        <p>If any owners are suspected of accepting bribes/offering bribes to enhance their/another owners team via trade, trading any assets other than fantasy players or FAAB $, or otherwise found guilty of engaging in any form of collusion*, all parties involved in the trade will be susceptible to punishment. The punishments will go as followed:</p>
        
        <ul>
            <li>First Offense – Immediate reduction of FAAB budget by 80%</li>
            <li>Second Offense – Immediate freeze on all transaction types for the next 18 weeks of regular season and playoff fantasy football games, including trades and waiver wire bids</li>
            <li>Third Offense – A league meeting of all members not involved in any of the improper trades/activity in question will take place to discuss next steps.</li>
        </ul>

        <p>All trades that are found guilty of collusion, will be reversed/denied. If the trade had affected the outcome of previous games, the results of those games will be revised.  </p>

        <p>*Collusion includes the organizing of veto votes against an acceptable trade.</p>

        <p>The commissioner will err on the side of letting owners manage their teams the way they see fit. Any collusion will need to be clear. The commissioner reserves the right to step in and at the very least assess the thinking of any team involved in a heavily lop-sided trade. </p>
    </div>

    <h4 bind:this={oneTwoTwo}>1.2.2 Lending Players Prohibition</h4>
    <div class="subBlock">
        <p>Any player traded from a team may not be re-acquired via trade within 6 weeks of the original trade. Any teams involved in this behavior will be subject to the aforementioned collusion punishments.</p>
    </div>
    
    <h4 bind:this={oneTwoThree}>1.2.3 Trade Deadline</h4>
    <div class="subBlock">
        <p>The trade deadline will be set for week 13. Trades are not allowed after week 13.</p>
    </div>
    
    <h4 bind:this={oneTwoFour}>1.2.4 Trade Restrictions</h4>
    <div class="subBlock">
        <p>You may only trade FAAB $ from the current season.</p>
    </div>
    
    <h4 bind:this={oneTwoFive}>1.2.5 Veto/Trade Process</h4>
    <div class="subBlock">
        <p>A total of 10 veto votes are required to veto a trade. Vetoes are only appropriate in instances of collusion or an egregious mismatch of value (i.e. CMC for a backup kicker). Not liking a trade does not warrant a veto.</p>
    </div>
    
    
    
    <h3 bind:this={oneThree}>1.3 Waiver Wire</h3>
    
    <p>FAAB Waiver wire system. Each team will begin the season with $150. $0 bids are allowed. Bids will process Wednesday (2am CDT).</p>

    <p>FAAB budgets will reset each season in January.</p>
    
    
    <h2 class="sectionHeading" bind:this={two}>Section 2 Drafting</h2>
    
    <h3 bind:this={twoOne}>2.1 Draft Order</h3>
    <p>Draft order will be determined by: TBD</p>
    
    <h3 bind:this={twoThree}>2.3 Draft Day Trades</h3>
    <p>Draft day trades are allowed; however, extra time will not be allocated to negotiate the trade. No one wants to draw out the draft even longer.</p>
    
    <h2 class="sectionHeading" bind:this={three}>Section 3 Scoring System</h2>

    <h3 bind:this={threeOne}>3.1 Scoring System</h3>
    <p>The league scoring system breakdown is listed on the Sleeper fantasy app (for the most part, it follows typical .5PPR Scoring). The scoring system will never change without a majority league vote.</p>
    
    <h2 class="sectionHeading" bind:this={four}>Section 4 Postseason</h2>
    
    <h3 bind:this={fourOne}>4.1 Playoffs</h3>
    <p>At the end of the season, 7 teams will make the playoffs. It will work like one side of the NFL playoffs.. The first round of playoffs will commence in week 15. Each team that wins their division and the 3 wild card teams that finish with the best records, will receive a playoff berth. The team with the best record will receive a bye week in the first round of the playoffs. Each playoff matchup will only last one week and the winner will advance. Week 18 will not be used.</p>
    
    <h3 bind:this={fourTwo}>4.2 Seeding Tiebreakers</h3>
    <p>If two teams within the same division finish tied for first place with the same overall record the tiebreakers will go as follows:</p>

    <ol>
        <li>Head 2 Head Record</li>
        <li>Division Record</li>
        <li>Points For</li>
        <li>Total Points Against</li>
        <li>Coin Flip</li>
    </ol>

    <p>If two Wildcard eligible teams (non-division winners) finish with the same overall record the tiebreakers will go as follows:</p>

    <ol>
        <li>Head 2 Head Record</li>
        <li>Points For</li>
        <li>Total Points Against</li>
        <li>Coin Flip</li>
    </ol>

    <h2 class="sectionHeading" bind:this={five}>Section 5 Tanking Policy</h2>
    
    <h3 bind:this={fiveOne}>5.1 League Tanking Policy</h3>
    <p>No team may intentionally leave starting roster spots empty or engage in any other tactics that lead to losing intentionally. Have a little self respect. Not much needs to be added to this.</p>

    <h2 class="sectionHeading" bind:this={six}>Section 6 Replacing Managers</h2>
    
    <h3 bind:this={sixOne}>6.1 Removing Managers</h3>
    <p>Short of continuously failing to set a valid lineup, or a 3rd confirmed collusion attempt, no manager can be removed against their will. Additionally, no effort will be made to coerce, manipulate or encourage a Manager to leave the league.</p>
    
    <h3 bind:this={sixTwo}>6.2 Replacing Managers</h3>
    <p>When a manager needs to be replaced, the commissioners will try to find a suitable candidate with some connection to at least a portion of the existing managers. The Commissioner will open up the conversation to the league for suggestions on who to add. After an adequate amount of time for discussion, the commissioner will then select the addition to the league. The Manager will be added to the league if they receive 75% vote.</p>

    <h2 class="sectionHeading" bind:this={seven}>Section 7 League Finances</h2>
    
    <h3 bind:this={sevenOne}>7.1 League Dues</h3>
    <p>There are no set league dues. However, two situations arise where leaguemates might have to pay up..</p>
    
    <p>First, the Commissioner is in charge of purchasing the championship ring each year. The Commissioner will request funds for the ring at any time throughout the year. When requested, leaguemates will consider a freewill offering to the ring fund. Your offering should be taken seriously. We have all seen the joy a ring brings to our women, and what a joyful tradition it is to see grown men receive a championship ring.</p>

        <p>Second, draft weekend costs. Please pay a fair share for costs incurred or be willing to make a contribution. Food, beer, cigarettes, cigars, etc. are all items that contribute to a fun weekend for all. Don’t be that guy who has to be reminded multiple times to pay up on venmo.</p>
    

    <h3 bind:this={sevenTwo}>7.2 Payout</h3>
    <p>League winner gets a ring. Ring funds are covered by Manager contributions. If contributions don’t cover the costs, the remaining amount will be subsidized by the Commissioner.</p>
  
    <h2 class="sectionHeading" bind:this={eight}>Section 8 League Voting</h2>
    <h3 bind:this={eightOne}>8.1 Voting</h3>
    <p>In the event that the League Constitution needs amended, each Manager is given 1 vote on matters brought up to the league. The Commissioner will conduct a poll and will not be included in the vote. The poll will be posed in the form of a question, where voting “Yes” changes matters of the league, and voting “No” leaves matters the same.</p>
    <p>If the vote receives 9 or more Yeses, it will be passed immediately. If the vote receives 8 or fewer Yeses, the change will not be made.</p>
    <p>Votes by Managers need to be made in a timely manner. If a Manager fails to vote, it will be counted as a “No.” If a significant amount of Managers fail to vote or abstain from voting, the Commissioner will make the final decision.</p>
    

    <h2 class="sectionHeading" bind:this={nine}>Section 9 Misc. League Information</h2>
    <h3 bind:this={nineOne}>9.1 League Makeup</h3>
    <ol>
        <li>Ryan Murphy - Commissioner</li>
        <li>Alan Mazzarella</li>
        <li>Anders Almberg</li>
        <li>Austin Kloewer</li>
        <li>Caleb Fruhling</li>
        <li>Camden Glenn</li>
        <li>Casey Blaylock</li>
        <li>Cole Borwick</li>
        <li>Cole Hauser</li>
        <li>Cole Williams</li>
        <li>Gabe Simpson</li>
        <li>Jack Murphy</li>
        <li>Jacob Rhein</li>
        <li>Jordan Gunti</li>
        <li>Kyle Martens</li>
        <li>Nolan Osland</li>
    </ol>


    <h3 bind:this={nineTwo}>9.1 Divisions</h3>

    <ol>
        <p>North</p>
        <ul>Cole Borwick</ul>
        <ul>Jordan Gunti</ul>
        <ul>Caleb Fruhling</ul>
        <ul>Ryan Murphy</ul>
    </ol>

    <ol>
        <p>South</p>
        <ul>Camden Glenn</ul>
        <ul>Jacob Rhein</ul>
        <ul>Nolan Osland</ul>
        <ul>Jack Murphy</ul>
    </ol>

    <ol>
        <p>East</p>
        <ul>Cole Williams</ul>
        <ul>Casey Blaylock</ul>
        <ul>Austin Kloewer</ul>
        <ul>Anders Almberg</ul>
    </ol>

    <ol>
        <p>West</p>
        <ul>Kyle Martens</ul>
        <ul>Cole Hauser</ul>
        <ul>Alan Mazzarella</ul>
        <ul>Gabe Simpson</ul>
    </ol>


    <h3 bind:this={nineThree}>9.3 Commissioner</h3>
    <p>The role of the Commissioner is often vague and challenging, but is rewarding and necessary. The goal of the Commissioner is to uphold the integrity and maintain the administration of the league. The current Commissioner is Ryan Murphy. To fight against abuse of power, here is an ongoing list of actions performed by the Commissioner that fall under the consent of the league in the past:</p>
        <ul>Allowing a Manager to reselect a draft pick due to a misclick followed by an immediate burst of regret</ul>









</div>
