// ==========================================================================
// Project:   TestRunner.sourceController
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals TestRunner */

/** @class

  Exposed the flattened list of targets for the source list.  Computed from 
  the root node generated on the targetsController.  Configure for display of
  the source list.

  @extends SC.TreeController
*/
TestRunner.sourceController = SC.TreeController.create(
/** @scope TestRunner.sourceController.prototype */ {

  contentBinding: 'TestRunner.targetsController.sourceRoot',
  treeItemChildrenKey: "children",
  treeItemIsExpandedKey: "isExpanded",
  treeItemIsGrouped: YES,
  
  allowsMultipleSelection: NO,
  allowsEmptySelection: NO
 
}) ;
