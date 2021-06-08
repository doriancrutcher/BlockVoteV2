

import { Context, logging, storage,PersistentMap} from 'near-sdk-as'

const DEFAULT_MESSAGE = 'Hello'

// Exported functions will be part of the public interface for your smart contract.
// Feel free to extract behavior to non-exported functions!

// view method
// getting info from blockchain
// does not cost money

const CandidateURL=new PersistentMap<string,string>("CandidateURls");
const CandidateDescriptions=new  PersistentMap<string,string>("Candidate Descriptions");
const CandidatePair=new PersistentMap<string,string[]>("candidate pair ");
const PromptArray=new PersistentMap<string,string[]>("array of Prompts");

//who would win in smash


// Change Methods 
export function addURl(name:string, url:string):void{
  CandidateURL.set(name,url);
  logging.log('added url for ' + name);
}

export function addDescription(name:string, description:string):void{
  CandidateURL.set(name,description);
  logging.log('added description for '+ name)
}

export function addCandidatePair(prompt:string,name1:string,name2:string):void{
  CandidatePair.set(prompt,[name1,name2])
  logging.log('new candiate pair ' +name1 + ' and ' + name2)
}

export function addToPromptArray(prompt:string):void{
  logging.log('added to prompt array')
  if(PromptArray.contains("AllArrays")){
    let tempArray=PromptArray.getSome("AllArrays")
    tempArray.push(prompt)
  PromptArray.set('AllArrays',tempArray)
  }else{
    PromptArray.set("AllArrays",[prompt])
  }
}

// View Methods

export function getCandidatePair(prompt:string):string[]{ 
  if(CandidatePair.contains(prompt)){
    return CandidatePair.getSome(prompt)
}
else{
  logging.log('No Candidate Pair Found')
  return []
}
}


export function getAllPrompts():string[]{
  if(PromptArray.contains("AllArrays")){
    return PromptArray.getSome("AllArrays")
}
else{
  logging.log('no prompts found')
  return []
}
}

export function getUrl(name:string):string{
  if(CandidateURL.contains(name)){return CandidateURL.getSome(name)}
  else{
    return ''
  }
}

export function getDescription(name:string):string{
  if(CandidateDescriptions.contains(name)){return CandidateDescriptions.getSome(name)}
  else{
    return ''
  }
}


