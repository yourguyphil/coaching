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
          title={'Mastering Prize/Point Mapping in Pokémon TCG Pocket'}
          items={[
            {
              title: 'Overview',
              subtitle:
                'When it comes to winning in Pokémon TCG Pocket, understanding and mastering prize/point mapping can give you a huge advantage.\n\n In this version of the Pokemon TCG, the first player to claim three prize points wins, so every decision you make should either bring you closer to this goal or force your opponent to take longer to reach it.\n\n Here’s how to use prize mapping, resource management, and strategic plays to tip the odds in your favor.',
            },
            {
              title: '1 - Making Your Opponent Take Extra Prizes/Points',
              subtitle:
                'Since it takes three prizes/points to win, the aim is to set up a game state where your opponent needs to take four prizes/points to close the game. (Making winning as difficult as possible for your opponent)\n\n Strategic Pokémon Choices: Field two Basic Pokémon and one EX to reach a 4-prize setup. An opponent who KOs two Basics and one EX is forced to take four prizes for the win. \n\nDouble EX Setup: Alternatively, fielding two EX Pokémon can have a similar effect, stretching your opponent’s need to take four total points.\n\nIn each case, by forcing your opponent to knock out extra Pokémon, you gain critical turns to either set up a win or align your resources to disrupt their attacker.',
            },
            {
              title: '2 -  Prize/Point Mapping Your Own Path to Victory',
              subtitle:
                'Prize mapping also means picking and choosing which fights are worth your energy and resources. Here’s how to apply that approach in-game:\n\nFocus on Opponent’s Key Attackers: Only invest resources in countering threats that could lead to your loss. Preserve energy and resources for their main attackers and don’t spread yourself thin across multiple threats.\n\nManage Your Own Resources: Avoid wasting energy on Pokémon that don’t pose an immediate threat. Conserve resources for when they’re most impactful, especially when focusing on taking out one of your opponent’s critical Pokémon to secure a prize point.\n\nThis disciplined approach allows you to conserve valuable assets, keeping you on track to victory without draining your deck or energy reserves prematurely.',
            },
            {
              title: '3 - Playing to Your Outs',
              subtitle:
                'In challenging moments, when you’re behind in resources or prizes/points, the best players position themselves to leverage any potential outs to position themselves to turn a losing boardstate into a potential win:\n\nIdentify Your Best Cards: Know which cards in your deck can change the current game state and give you a potential win, even from a tough spot. Think of the cards left in your deck that could swing the game into your favor by analyzing the cards in your hand + what has been played already and work toward drawing and position yourself to best benefit from utilizing them.\n\nSet Traps and Counters: Position your Pokémon and resources to bait your opponent into unfavorable trades or buy time. This can force them to use up resources and open an opportunity for you to strike back when you have gotten enough time to power up another attacker.\n\nThe idea is to give yourself a chance to turn the game around. Even if you’re behind and the chances are slim, staying focused on how you can potentially gain advantage can lead to unexpected victories.',
            },
            {
              title: 'Conclusion',
              subtitle:
                'By understanding and practicing these prize/point mapping concepts, you’ll be able to better outmaneuver your opponents in Pokémon TCG Pocket. With strategic planning, careful resource management, and a strong understanding of both decks in play, you’ll maximize your chances of winning—no matter the challenge.',
            },
          ]}
        />
      </Box>
      <Box marginBottom={6}>
        <FaqGroupItem
          title={'Deck Building for the Pokémon TCG Pocket Metagame'}
          items={[
            {
              title: 'Overview',
              subtitle:
                'In Pokémon TCG Pocket, where every decision counts, building a solid streamlined deck can make the difference in increasing the chances of victory and minimizing defeat. A well-built tight 20 card Pokemon Pocket deck supports your strategy and helps you control the flow of the game, keeping the momentum in your favor.\n\nEvery card must earn its place, providing consistency, power, or adaptability to handle whatever your opponent throws at you. Here’s how to streamline your deck for efficiency, avoid getting stuck with unplayable hands, and master the matchups that matter',
            },
            {
              title: '1 - Streamlining Your Deck for Consistent Game play',
              subtitle:
                'In a 20-card deck with 5 card opening hands, there’s no room for filler. Each card should either help you mount an offense quickly or set up a game-winning strategy with a powerful attacker.\n\nEfficient Attackers: Choose attackers that can hit the field and apply pressure without excessive energy costs. A few versatile Basics with strong, low-energy attacks can keep the pressure on while you build up. On the other hand playing high HP basics can help buy you time to set up a larger attacker. In either case it is important to play supports and items that help progress your game/smooth out your setup.\n\nThe Big Play: While early-game pressure is essential, every deck should have a high-impact attacker that can take control in the mid-to-late game. Use the early game to defend and build up the resources/chip the damage you need to unleash a fully powered EX Pokémon or similar heavy-hitter. Pokemon TCG is usually an arms race, build as efficiently and quickly as possible while disrupting your opponent.\n\nStreamlining is about cutting cards that don’t directly support these goals, ensuring you draw impactful, playable cards at every stage of the game.',
            },
            {
              title: '2 - Reducing the Risk of Unplayable Hands',
              subtitle:
                'Nothing is more frustrating than starting with an unplayable hand. When deck building we want to minimize that risk:\n\nLimit High-Cost Pokémon: Avoid loading your deck with too many high-energy-cost attackers. Instead, include Pokémon with low-cost attacks or low retreat costs that can quickly get you out of a rough spot by chipping damage or soaking up a hit if needed.\n\nSearch and Draw Support: Make sure you have enough ways to draw or search for needed cards. Cards that let you draw multiple cards (ex. Professor\'s Research) or search for specific cards (ex. Poke ball) will help give you options and dedicate more card slots to minimize being stuck without a playable option.\n\nA consistent deck minimizes unplayable hands, giving you a smooth start and options as you move toward your win condition.',
            },
            {
              title: '3 - Mastering One Deck and Knowing the Meta',
              subtitle:
                'To become a competitive Pokémon TCG Pocket player, focus on truly mastering one deck. Knowing it inside and out lets you understand how it lines up against popular decks and how to adjust your game plan on the fly.\n\nPlay to Your Deck’s Strengths: Once you know your deck’s ideal play pattern, learn to read your opponent’s strategy. Every matchup will have key turning points where you’ll need to decide whether to be aggressive or defensive based on the board state and their deck.\n\nUnderstand Popular Decks: Study the common decks in the meta so you know their strategies and their vulnerabilities. This knowledge lets you anticipate their key plays and counters, keeping you one step ahead.\n\nTrack Card Counts: With a 20-card deck limit, it’s critical to know which cards have been played and which remain. As you and your opponent play through, mentally track your key cards as well as the opponent’s, so you can calculate their potential moves and set up a winning play when it matters most.\n\nMastering one deck while understanding the meta enables you to navigate each game with precision, knowing the most important game play patterns to execute or avoid from your opponent.',
            },
            {
              title: 'Conclusion',
              subtitle:
                'Having a strong deck and knowledge of your deck/current metagame will best set you up for success before you even start a game.\n\nA strong Pokémon TCG Pocket deck is streamlined, efficient, and adaptable to any opponent. By focusing on consistent, versatile attackers and building up to a powerful play, you’ll maintain control of the game. By mastering your deck and knowing the popular ones, you’ll gain the upper hand through insight and anticipation.',
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
              'Your feedback and support means the world to me!\n\nIf there are specific strategies you’re struggling with or topics you’d like to dive deeper into, let me know! Your questions and ideas shape future guides, ensuring I am covering what matters most to help you improve. Each game has its unique challenges, and your input helps me to create resources that directly address the situations you face. So, don’t hesitate to reach out with your ideas and questions!',
            },
            {
              title: 'Get Expert Coaching! [Shameless Plug]',
              subtitle:
                'Ready to take your skills even higher? Sign up for a coaching session or deck review, where I work one-on-one to refine your strategy, strengthen your deck building, and refine your in-game tactics. This is a personalized approach focusing on building the tools you need to outplay the competition consistently. Whether you’re just starting or looking to compete at a higher level, I\'m here to help you win more, lose less, and enjoy the game at its best. Let’s start winning together-Click Start Now in the navigation bar!',
            }
          ]}
        />
      </Box>
    </Box>
  );
};

export default Content;
