﻿// <copyright>
// Copyright 2013 by the Spark Development Network
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// </copyright>
//
namespace Rock.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    /// <summary>
    ///
    /// </summary>
    public partial class MoveHtmlContentApprovalBlock : Rock.Migrations.RockMigration1
    {
        /// <summary>
        /// Operations to be performed during the upgrade process.
        /// </summary>
        public override void Up()
        {
            Sql(@"DELETE FROM [BlockType] WHERE [Path] = '~/Blocks/Cms/HtmlContentApproval.ascx' AND [GUID] != '79E4D7D2-3F18-43A9-9A62-E02F09C6051C'"); // delete block type with the new path as it was probably auto added by the framework
            Sql(@"UPDATE [BlockType] set [Path] = '~/Blocks/Cms/HtmlContentApproval.ascx' where [Guid] = '79E4D7D2-3F18-43A9-9A62-E02F09C6051C'");
        }
        
        /// <summary>
        /// Operations to be performed during the downgrade process.
        /// </summary>
        public override void Down()
        {
        }
    }
}
