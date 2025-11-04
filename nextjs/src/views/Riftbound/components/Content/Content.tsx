import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface FaqGroupItemProps {
  title: string;
  items: Array<{
    title: string;
    subtitle: string;
  }>;
}

const FaqGroupItem = ({ title, items }: FaqGroupItemProps): JSX.Element => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={2}>
        <Typography fontWeight={700} variant={'h5'}>
          {title}
        </Typography>
      </Box>
      <Box>
        {items.map((item, i) => (
          <Box
            component={Accordion}
            key={i}
            padding={1}
            marginBottom={2}
            borderRadius={`${theme.spacing(1)} !important`}
            sx={{
              '&::before': {
                display: 'none',
              },
            }}
          >
            <Box
              component={AccordionSummary}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id={`panel1a-header--${i}`}
            >
              <Typography fontWeight={600}>{item.title}</Typography>
            </Box>
            <AccordionDetails>
              <Typography color="text.secondary" sx={{ whiteSpace: 'pre-line' }}>
                {item.subtitle}
              </Typography>
            </AccordionDetails>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const Content = (): JSX.Element => {
  return (
    <Box>
      <Box marginBottom={6}>
        <FaqGroupItem
          title={'Mastering Point Tempo in Riftbound'}
          items={[
            {
              title: 'Overview',
              subtitle:
                'In Riftbound, victory isn\'t about flashy combos - it\'s about tempo.\n\nEvery match is a race to reach 8 points first, and the player who controls when and where those points are scored dictates the entire flow of the game.\n\nPoint Tempo means planning how you\'ll reach 8 before your opponent - not just playing reactively. The best players map out their scoring path early, manage battlefields smartly, and convert every moment of control into points.',
            },
            {
              title: 'Point 1: Early Game - Secure and Reinforce',
              subtitle:
                'The first few turns set your entire tempo plan. You have two main paths:\n\na. Establish and Hold:\n\nQuickly deploy to a battlefield you can reinforce all game. Get points early, fortify your lead, and make that lane your stronghold.\n\nPrioritize stable units over flashy plays.\n\nReinforce instead of rotating too early - every hold turn matters.\n\nThe longer you maintain that lane, the easier it is to pivot later.\n\nb. Hit and Retreat:\n\nSometimes, the smarter play is to grab early points, then fall back.\n\nPush fast, get ahead 2-3 points, then regroup.\n\nUse your tempo advantage to force overreactions and set up counter-attacks.\n\nMake your opponent chase your lead across battlefields.',
            },
            {
              title: 'Point 2: Mid to Late Game - Converting Control into Points',
              subtitle:
                'When both players are developing, tempo becomes about timing your pushes.\n\na. Overload to Hold:\n\nIn the late game, pick your decisive battlefield and commit.\n\nStack units and buffs to ensure control for multiple turns.\n\nMake your opponent waste mana contesting your hold.\n\nEvery turn you hold uncontested is free progress toward 8.\n\nb. The Double-Conquer Turn:\n\nElite players win with planned explosiveness.\n\nBuild pressure across two lanes, then strike for point 7 and 8 together.\n\nThis "double-conquer" turn prevents comeback plays and closes games instantly.\n\nDon\'t rush into it - prepare your board so your final push is unstoppable.',
            },
            {
              title: 'Point 3: Planning Your 8-Point Route',
              subtitle:
                'Winning through tempo isn\'t luck - it\'s mapping your path from turn one.\n\nAsk yourself:\n\nWhich battlefield can I control the longest?\n\nWhere will my 7th and 8th points come from?\n\nWhen should I shift from scoring to defending?\n\nEvery tempo-based win comes from foresight. You\'re not reacting to their moves - you\'re executing your plan turn by turn until the scoreboard reads 8-X.',
            },
            {
              title: 'Conclusion',
              subtitle:
                'Tempo is more than speed - it\'s direction.\n\nBy knowing when to push, when to hold, and when to convert, you dictate every turn\'s pace.\n\nRiftbound rewards players who plan their path to 8 before the first card hits the field.\n\nScore first, stay in control, and end the game on your own terms.',
            },
          ]}
        />
      </Box>
      <Box marginBottom={6}>
        <FaqGroupItem
          title={'How to Win More in Riftbound: Timing Actions & Reactions'}
          items={[
            {
              title: 'Overview',
              subtitle:
                'Winning tight games often comes down to when you act, not just what you play.\n\n Riftbound\'s timing system (Open vs. Closed states, Chains, Showdowns, Focus/Priority, Action/Reaction) rewards the player who waits, gathers info, and then strikes at the last legal moment.\n\n Mastering this lets you maximize the impact of your cards, blank enemy cards by weakening their utility, and win key showdowns.',
            },
            {
              title: 'Point 1: The "Last Possible Second" Philosophy',
              subtitle:
                'Act only when you must. Priority/Focus define who may act; Open/Closed states and Showdowns define what may be played.\n\n Waiting until the last legal window gives you maximum board and resource info before you commit.\n\nOpen vs. Closed. If no Chain exists, the state is Open; once a card/ability goes on the Chain, it\'s Closed—only Reaction effects can be added. Posturing in your sequencing is a tactic used to gain information revealing their plan, where you are meticulus in your actions to bait out interaction to narrow down the possible reads of what your opponent might have in their hand. This idea goes even further with bluffing interaction you might or might not have to set up traps / buy you time.\n\nLet them commit; you react. Spells resolve top-down on the Chain; if you wait and respond after targets are chosen, you can minimize their effects with your own reactions (move a unit, remove a target, modifying stats, etc.).\n\nNon-reactable game actions like movement/drawing a card/ending the turn doesn\'t trigger a showdown and can\'t be Reacted to. Giving us the opportunity to strategically deny their timing windows and buy you time.\n\nThe overall goal is to use your timing to gain information and control the flow of the game, making it as difficult as possible for your opponent to execute their gameplan and interaction.',
            },
            {
              title: 'Point 2: Sequencing to Bait Reactions (Value, Bluffing, & Reads)',
              subtitle:
                'Bait with low stakes, punish with high stakes. Lead with a smaller play to force information—make them spend a Reaction or keep runes up—then commit the real threat after you\'ve read their timing.\n\nExploit the Chain. Once a Chain starts, only Reactions can join it. If you can open a Chain they must answer (or lose a target), you tax their runes and narrow their options for the rest of the turn.\n\nCreate mistargets. Opponents choose targets while playing; if those targets become illegal by resolution (move zone, change state), that instruction is ignored—your card still "played," their card did nothing. Sequence with this in mind.\n\nBluff with runes. Leaving specific runes available threatens Action/Reaction lines. Good opponents watch unspent runes; you should too—long pauses, conserved resources, and repeated passes often telegraph interaction. (Hidden/face-down tools amplify this posture.)\n\n',
            },
            {
              title: 'Point 3: Showdowns—Who Goes First, Who Gets the Last Say',
              subtitle:
                'When Showdowns happen. A Showdown opens when combat begins or when a player contests an uncontrolled battlefield after a move; the mover/attacker gains Focus first.\n\nFocus ≠ forever. In Showdowns, the player with Focus has Priority to play Action/Reaction options; after each Chain resolves, Focus passes in turn order. Passing in sequence ends the Showdown—plan to engineer the last meaningful action.\n\nInitial triggers & stat mods. At combat Showdowns, "When I attack/defend" triggers stack first; Assault/Shield apply before damage assignment. Understanding this lets you time pumps, stuns, and recalls for maximum swing.\n\nFinal-window discipline. Because Showdowns are Open (until a Chain starts), you can wait, let them expose a buff/counter, then answer with your Reaction—aim to be the last to act before damage or before Conquer/Hold outcomes are locked.\n\n',
            },
            {
              title: 'Conclusion',
              subtitle:
                'Every desion you make in not only what to play but when you play it is a decision to either gain information or control the flow of the game. Use Open/Closed state knowledge, Chain rules, and Showdown Focus to bait responses, create mistargets, and claim outsized value from every rune.\n\n The most disciplined player can consistently leverage timing to gain information and control the flow of the game, making it as difficult as possible for their opponent to execute their gameplan and interaction.',
            },
          ]}
        />
      </Box>
      <Box>
        <FaqGroupItem
          title={'Want more?'}
          items={[
            {
              title: 'Keep checking back here or send me a quick message!',
              subtitle:
                'Your feedback and support means the world to me!\n\nIf there are specific strategies you\'re struggling with or topics you\'d like to dive deeper into, let me know! Your questions and ideas shape future guides, ensuring I am covering what matters most to help you improve. Each game has its unique challenges, and your input helps me to create resources that directly address the situations you face. So, don\'t hesitate to reach out with your ideas and questions!',
            },
            {
              title: 'Get Expert Coaching! [Shameless Plug]',
              subtitle:
                'Ready to take your skills even higher? Sign up for a coaching session or deck review, where I work one-on-one to refine your strategy, strengthen your deck building, and refine your in-game tactics. This is a personalized approach focusing on building the tools you need to outplay the competition consistently. Whether you\'re just starting or looking to compete at a higher level, I\'m here to help you win more, lose less, and enjoy the game at its best. Let\'s start winning together-Click Start Now in the navigation bar!',
            }
          ]}
        />
      </Box>
    </Box>
  );
};

export default Content;

