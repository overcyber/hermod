## tell me about
* tell_me_about{"thing":"fred"}
  - slot{"thing": "fred"}
  - action_search_wikipedia

## tell me about person
* tell_me_about{"person":"fred"}
  - slot{"person": "fred"}
  - action_search_wikipedia
  
## tell me about place
* tell_me_about{"place":"fred"}
  - slot{"place": "fred"}
  - action_search_wikipedia
  
## tell me about followup
* tell_me_about{"thing":"fred"}
  - slot{"thing": "fred"}
  - action_search_wikipedia
* ask_followup_attribute{"attribute":"population"}
  - slot{"attribute": "population"}
  - action_search_wikidata
  
## tell me about person followup
* tell_me_about{"person":"fred"}
  - slot{"person": "fred"}
  - action_search_wikipedia
* ask_followup_attribute{"attribute":"population"}
  - slot{"attribute": "population"}
  - action_search_wikidata
    
## tell me about place followup
* tell_me_about{"place":"fred"}
  - slot{"place": "fred"}
  - action_search_wikipedia
* ask_followup_attribute{"attribute":"population"}
  - slot{"attribute": "population"}
  - action_search_wikidata
    
## ask attribute
* ask_attribute{"attribute":"capital","thing":"Paris"}
  - slot{"attribute": "capital"}
  - slot{"thing": "Paris"}
  - action_search_wikidata
  


## tell me about person attribute
* ask_attribute{"person":"fred","attribute":"age"}
  - slot{"person": "fred"}
  - slot{"attribute": "age"}
  - action_search_wikidata
  
## tell me about place  attribute
* ask_attribute{"place":"fred","attribute":"population"}
  - slot{"place": "fred"}
  - slot{"attribute": "population"}
  - action_search_wikidata
  
## speak mnemonic intent
* speak_mnemonic{}
  - action_speak_mnemonic

  
   
## define word
* define{"word":"fred"}
  - slot{"word": "fred"}
  - action_search_wiktionary
  
## spell word
* spell_word{"word":"fred"}
  - slot{"word": "fred"}
  - action_spell_word  
  
## synonyms word
* synonyms_word{"word":"fred"}
  - slot{"word": "fred"}
  - action_synonyms_word  
  
## ask follow up attribute
* ask_attribute{"attribute":"capital","thing":"Paris"}
  - slot{"attribute": "capital"}
  - slot{"thing": "Paris"}
  - action_search_wikidata
* ask_followup_attribute{"attribute":"population"}
  - slot{"attribute": "population"}
  - action_search_wikidata
  
## ask follow up attribute place
* ask_attribute{"attribute":"capital","place":"Paris"}
  - slot{"attribute": "capital"}
  - slot{"place": "Paris"}
  - action_search_wikidata
* ask_followup_attribute{"attribute":"population"}
  - slot{"attribute": "population"}
  - action_search_wikidata

## ask follow up attribute person
* ask_attribute{"attribute":"capital","person":"Paris"}
  - slot{"attribute": "capital"}
  - slot{"person": "Paris"}
  - action_search_wikidata
* ask_followup_attribute{"attribute":"population"}
  - slot{"attribute": "population"}
  - action_search_wikidata
  
## tell me more
* tell_me_about{"thing":"fred"}
  - slot{"thing": "fred"}
  - slot{"last_wikipedia_search": "1::::::fred"}
  - action_search_wikipedia
* tell_me_more
  - slot{"last_wikipedia_search": "2::::::fred"}
  - action_tell_me_more


## tell me more 2
* tell_me_about{"thing":"fred"}
  - slot{"thing": "fred"}
  - slot{"last_wikipedia_search": "1::::::fred"}
  - action_search_wikipedia
* tell_me_more
  - slot{"last_wikipedia_search": "2::::::fred"}
  - action_tell_me_more
* tell_me_more
  - slot{"last_wikipedia_search": "3::::::fred"}
  - action_tell_me_more
  
## tell me more 3 after attribute
* ask_attribute{"place":"fred","attribute":"population"}
  - slot{"place": "fred"}
  - slot{"attribute": "population"}
  - action_search_wikidata
* tell_me_more
  - slot{"last_wikipedia_search": "2::::::fred"}
  - action_tell_me_more
* tell_me_more
  - slot{"last_wikipedia_search": "3::::::fred"}
  - action_tell_me_more


## what can i say
* what_can_i_say
  - utter_can_say  


## ask the time
* ask_time
  - action_tell_time

## ask the date
* ask_date
  - action_tell_date
    
## say goodbye
* quit
  - utter_goodbye
  - action_end
  
  
    
## navigate to
* navigate_to{"nav_target":"home"}
  - slot{"nav_target": "home"}
  - action_navigate_to  
  
## fill crossword
* fill_crossword{"crossword_position":"one across", "word":"fred"}
  - slot{"crossword_position":"one across", "word":"fred"}
  - action_fill_crossword  


## search youtube thing
* search_youtube{"thing":"fred"}
  - slot{"thing": "fred"}
  - action_search_youtube

## search youtube person
* search_youtube{"person":"fred"}
  - slot{"person": "fred"}
  - action_search_youtube
  
## search youtube place
* search_youtube{"place":"canada"}
  - slot{"place": "canada"}
  - action_search_youtube
  
  
## search picture thing
* show_me_picture{"thing":"fred"}
  - slot{"thing": "fred"}
  - action_show_me_picture

## search picture person
* show_me_picture{"person":"fred"}
  - slot{"person": "fred"}
  - action_show_me_picture
  
## search picture place
* show_me_picture{"place":"canada"}
  - slot{"place": "canada"}
  - action_show_me_picture

