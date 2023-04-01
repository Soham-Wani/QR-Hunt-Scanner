# QR Hunt Scanner
## Introduction
This repository contains a custom QR scanner developed for conducting QR hunts. This is not any QR scavenger hunt. It is the intelligent integration of treasure hunt and conventional QR scavenger hunt.
## Usage
If you want to play one, find someone who is hosting one. If you want to host one, follow the steps below:
### Steps to set up the scanner
1. Fork this repository.
2. Create a real-time database in Google Firebase.
3. Add your database `APIKEY` as environment secret with the same name as you call it in the code.
4. Make necessary changes in `index.html` like timings, rounds, teams etc. with the help of the comments in the code.
5. From settings of the repository, enable GitHub pages. Do not make changes in the `.yml` workflow file if you don't have knowledge.
6. Share the link of the page with the players and give them instructions and explain them the game plan.
### Steps to set up clues and QRs
1. Copy contents of `update-in-database.txt` in any of your local editors.
2. Decide clues and obtain links for the clues. As per the current code, you will need 6 Google maps link location clues, 4 photo clues and 2 video clues.
3. Place them correctly in `update-in-database` as per the comments and save it with `.html` extension.
4. Run this html file once.
5. Check it in your Firebase console whether the clues are updated or not.
6. Do not save this file in your GitHub fork. This file contains all the clues which will become accessible to the players if you post it on GitHub.
7. Lastly you will need to print the QRs and hide them in proper places. This might be confusing so be aware.
## Game Plan
- Round 1: 18 teams are given a QR code with a clue to the next QR, which they must scan and enter a passkey to reach the next clue. Clues are not displayed until the designated time.
- Round 2: 8 teams are selected based on who scans the QR first, with 6 qualifying teams and 2 wild card entries from eliminated teams. The format is the same as Round 1, with clues leading to 8 QRs placed around the campus.
- Round 3: Only 4 teams remain, with the same format as Rounds 1 and 2, but with increased difficulty.
- Round 4: The final 2 teams are determined similarly and return to the initial location.
- Round 5: The final round takes place in a confined space, with both finalist teams running to find 50+ QRs with varying points based on difficulty. The team with the most points at the end of the round wins the quest.
## Suggested Rules
- Each team will be provided with their unique passkey that they will use throughout the game. They will have to enter the passkey after each scan. Players are not allowed to share their key with anyone or use any other team's key.
- No QR codes are hidden outside the college campus, inside buildings, near electrical appliances, in restricted areas, in dense flora or any other dangerous areas. Thus, entering such areas is strictly prohibited.
- Players must obey all traffic and pedestrian laws and be mindful of their surroundings. Players must not damage or vandalize any property in the process of completing the quest. Players must not hurt flora and fauna of the campus while playing.
- Indiscipline and violence will be strictly not tolerated. Not only the team will be disqualified, there are chances of disciplinary action will be taken against the participants.
- Participants (in the game and outside the game) should not help anyone besides their own team. This will result in instant disqualification.
- Players must stay together as a team at all times.
- Each team will have a volunteer from the organising committee to enforce these rules. Team actions maybe recorded. Misbehaviour with any member of the organising committee will lead to disqualification even if the team has won already.
- All the teams participating should return to the starting point with all the QRs collected in the game, even if they are eliminated.
- There may be dummy QRs spread over the campus, beware of those. Complaints regarding those will not be entertained.
- **In any circumstances, decision of the organising committee will be final and should not be questioned. By playing the game, participants agree to follow and abide all the above mentioned rules.**
## QR Quest: The Crusade
QR Quest was a highly anticipated event at Gati Shakti Vishwavidyalaya's annual tech fest, Epitome'23, held on March 25, 2023, as an intracollege event. It was a unique twist on the traditional treasure hunt, challenging participants' problem-solving and analytical skills with QR codes that led them through a thrilling adventure of audio-visual clues. This event offered a fun and interactive opportunity to test tech-savvy skills and knowledge.
## Help
Open a pull request or an issue to suggest bug fixes, additions, etc. 

If you have any trouble in hosting a hunt or making changes, just open an issue, I will guide you. 
