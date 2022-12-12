(this.webpackJsonplottery=this.webpackJsonplottery||[]).push([[9],{1150:function(t,e,r){"use strict";(function(t){var i=this&&this.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},t(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function i(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}(),n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var e,r=1,i=arguments.length;r<i;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},n.apply(this,arguments)},o=this&&this.__read||function(t,e){var r="function"===typeof Symbol&&t[Symbol.iterator];if(!r)return t;var i,n,o=r.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(i=o.next()).done;)a.push(i.value)}catch(s){n={error:s}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}return a};Object.defineProperty(e,"__esModule",{value:!0});var a=r(548),s=r(687),c=r(940),h=r(941),d=function(e){function r(t,r){void 0===r&&(r={});var i,o=this;if((o=e.call(this,n(n({},t),{type:0}),r)||this).common=o._validateTxV(o.v,r.common),o.gasPrice=new a.BN((0,a.toBuffer)(""===t.gasPrice?"0x":t.gasPrice)),o.gasPrice.mul(o.gasLimit).gt(a.MAX_INTEGER)){var c=o._errorMsg("gas limit * gasPrice cannot exceed MAX_INTEGER (2^256-1)");throw new Error(c)}if(o._validateCannotExceedMaxInteger({gasPrice:o.gasPrice}),o.common.gteHardfork("spuriousDragon"))if(o.isSigned()){var d=o.v,u=o.common.chainIdBN().muln(2);(d.eq(u.addn(35))||d.eq(u.addn(36)))&&o.activeCapabilities.push(s.Capability.EIP155ReplayProtection)}else o.activeCapabilities.push(s.Capability.EIP155ReplayProtection);return o.common.isActivatedEIP(3860)&&(0,h.checkMaxInitCodeSize)(o.common,o.data.length),(null===(i=null===r||void 0===r?void 0:r.freeze)||void 0===i||i)&&Object.freeze(o),o}return i(r,e),r.fromTxData=function(t,e){return void 0===e&&(e={}),new r(t,e)},r.fromSerializedTx=function(t,e){void 0===e&&(e={});var r=a.rlp.decode(t);if(!Array.isArray(r))throw new Error("Invalid serialized tx input. Must be array");return this.fromValuesArray(r,e)},r.fromRlpSerializedTx=function(t,e){return void 0===e&&(e={}),r.fromSerializedTx(t,e)},r.fromValuesArray=function(t,e){if(void 0===e&&(e={}),6!==t.length&&9!==t.length)throw new Error("Invalid transaction. Only expecting 6 values (for unsigned tx) or 9 values (for signed tx).");var i=o(t,9),n=i[0],s=i[1],c=i[2],h=i[3],d=i[4],u=i[5],f=i[6],l=i[7],v=i[8];return(0,a.validateNoLeadingZeroes)({nonce:n,gasPrice:s,gasLimit:c,value:d,v:f,r:l,s:v}),new r({nonce:n,gasPrice:s,gasLimit:c,to:h,value:d,data:u,v:f,r:l,s:v},e)},r.prototype.raw=function(){return[(0,a.bnToUnpaddedBuffer)(this.nonce),(0,a.bnToUnpaddedBuffer)(this.gasPrice),(0,a.bnToUnpaddedBuffer)(this.gasLimit),void 0!==this.to?this.to.buf:t.from([]),(0,a.bnToUnpaddedBuffer)(this.value),this.data,void 0!==this.v?(0,a.bnToUnpaddedBuffer)(this.v):t.from([]),void 0!==this.r?(0,a.bnToUnpaddedBuffer)(this.r):t.from([]),void 0!==this.s?(0,a.bnToUnpaddedBuffer)(this.s):t.from([])]},r.prototype.serialize=function(){return a.rlp.encode(this.raw())},r.prototype._getMessageToSign=function(){var e=[(0,a.bnToUnpaddedBuffer)(this.nonce),(0,a.bnToUnpaddedBuffer)(this.gasPrice),(0,a.bnToUnpaddedBuffer)(this.gasLimit),void 0!==this.to?this.to.buf:t.from([]),(0,a.bnToUnpaddedBuffer)(this.value),this.data];return this.supports(s.Capability.EIP155ReplayProtection)&&(e.push((0,a.toBuffer)(this.common.chainIdBN())),e.push((0,a.unpadBuffer)((0,a.toBuffer)(0))),e.push((0,a.unpadBuffer)((0,a.toBuffer)(0)))),e},r.prototype.getMessageToSign=function(t){void 0===t&&(t=!0);var e=this._getMessageToSign();return t?(0,a.rlphash)(e):e},r.prototype.getDataFee=function(){return this.cache.dataFee&&this.cache.dataFee.hardfork===this.common.hardfork()?this.cache.dataFee.value:(Object.isFrozen(this)&&(this.cache.dataFee={value:e.prototype.getDataFee.call(this),hardfork:this.common.hardfork()}),e.prototype.getDataFee.call(this))},r.prototype.getUpfrontCost=function(){return this.gasLimit.mul(this.gasPrice).add(this.value)},r.prototype.hash=function(){return Object.isFrozen(this)?(this.cache.hash||(this.cache.hash=(0,a.rlphash)(this.raw())),this.cache.hash):(0,a.rlphash)(this.raw())},r.prototype.getMessageToVerifySignature=function(){if(!this.isSigned()){var t=this._errorMsg("This transaction is not signed");throw new Error(t)}var e=this._getMessageToSign();return(0,a.rlphash)(e)},r.prototype.getSenderPublicKey=function(){var t,e=this.getMessageToVerifySignature();if(this.common.gteHardfork("homestead")&&(null===(t=this.s)||void 0===t?void 0:t.gt(s.N_DIV_2))){var r=this._errorMsg("Invalid Signature: s-values greater than secp256k1n/2 are considered invalid");throw new Error(r)}var i=this,n=i.v,o=i.r,c=i.s;try{return(0,a.ecrecover)(e,n,(0,a.bnToUnpaddedBuffer)(o),(0,a.bnToUnpaddedBuffer)(c),this.supports(s.Capability.EIP155ReplayProtection)?this.common.chainIdBN():void 0)}catch(h){r=this._errorMsg("Invalid Signature");throw new Error(r)}},r.prototype._processSignature=function(t,e,i){var o=new a.BN(t);this.supports(s.Capability.EIP155ReplayProtection)&&o.iadd(this.common.chainIdBN().muln(2).addn(8));var c=n(n({},this.txOptions),{common:this.common});return r.fromTxData({nonce:this.nonce,gasPrice:this.gasPrice,gasLimit:this.gasLimit,to:this.to,value:this.value,data:this.data,v:o,r:new a.BN(e),s:new a.BN(i)},c)},r.prototype.toJSON=function(){return{nonce:(0,a.bnToHex)(this.nonce),gasPrice:(0,a.bnToHex)(this.gasPrice),gasLimit:(0,a.bnToHex)(this.gasLimit),to:void 0!==this.to?this.to.toString():void 0,value:(0,a.bnToHex)(this.value),data:"0x"+this.data.toString("hex"),v:void 0!==this.v?(0,a.bnToHex)(this.v):void 0,r:void 0!==this.r?(0,a.bnToHex)(this.r):void 0,s:void 0!==this.s?(0,a.bnToHex)(this.s):void 0}},r.prototype._validateTxV=function(t,e){if(void 0!==t&&t.ltn(37)&&!t.eqn(27)&&!t.eqn(28))throw new Error("Legacy txs need either v = 27/28 or v >= 37 (EIP-155 replay protection), got v = ".concat(t));var r;if(void 0!==t&&(!e||e.gteHardfork("spuriousDragon"))&&!t.eqn(27)&&!t.eqn(28))if(e){var i=e.chainIdBN().muln(2);if(!(t.eq(i.addn(35))||t.eq(i.addn(36))))throw new Error("Incompatible EIP155-based V ".concat(t," and chain id ").concat(e.chainIdBN(),". See the Common parameter of the Transaction constructor to set the chain id."))}else{var n=void 0;n=t.subn(35).isEven()?35:36,r=t.subn(n).divn(2)}return this._getCommon(e,r)},r.prototype._unsignedTxImplementsEIP155=function(){return this.common.gteHardfork("spuriousDragon")},r.prototype._signedTxImplementsEIP155=function(){if(!this.isSigned()){var t=this._errorMsg("This transaction is not signed");throw new Error(t)}var e=this.common.gteHardfork("spuriousDragon"),r=this.v,i=this.common.chainIdBN().muln(2);return(r.eq(i.addn(35))||r.eq(i.addn(36)))&&e},r.prototype.errorStr=function(){var t=this._getSharedErrorPostfix();return t+=" gasPrice=".concat(this.gasPrice)},r.prototype._errorMsg=function(t){return"".concat(t," (").concat(this.errorStr(),")")},r}(c.BaseTransaction);e.default=d}).call(this,r(244).Buffer)},1151:function(t,e,r){"use strict";(function(t){var i=this&&this.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},t(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function i(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}(),n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var e,r=1,i=arguments.length;r<i;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},n.apply(this,arguments)},o=this&&this.__read||function(t,e){var r="function"===typeof Symbol&&t[Symbol.iterator];if(!r)return t;var i,n,o=r.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(i=o.next()).done;)a.push(i.value)}catch(s){n={error:s}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}return a};Object.defineProperty(e,"__esModule",{value:!0});var a=r(548),s=r(940),c=r(687),h=r(941),d=t.from(1..toString(16).padStart(2,"0"),"hex"),u=function(e){function r(t,r){void 0===r&&(r={});var i,o,s=this;(s=e.call(this,n(n({},t),{type:1}),r)||this).DEFAULT_HARDFORK="berlin";var d=t.chainId,u=t.accessList,f=t.gasPrice;if(s.common=s._getCommon(r.common,d),s.chainId=s.common.chainIdBN(),!s.common.isActivatedEIP(2930))throw new Error("EIP-2930 not enabled on Common");s.activeCapabilities=s.activeCapabilities.concat([2718,2930]);var l=h.AccessLists.getAccessListData(null!==u&&void 0!==u?u:[]);if(s.accessList=l.accessList,s.AccessListJSON=l.AccessListJSON,h.AccessLists.verifyAccessList(s.accessList),s.gasPrice=new a.BN((0,a.toBuffer)(""===f?"0x":f)),s._validateCannotExceedMaxInteger({gasPrice:s.gasPrice}),s.gasPrice.mul(s.gasLimit).gt(a.MAX_INTEGER)){var v=s._errorMsg("gasLimit * gasPrice cannot exceed MAX_INTEGER");throw new Error(v)}if(s.v&&!s.v.eqn(0)&&!s.v.eqn(1)){v=s._errorMsg("The y-parity of the transaction should either be 0 or 1");throw new Error(v)}if(s.common.gteHardfork("homestead")&&(null===(i=s.s)||void 0===i?void 0:i.gt(c.N_DIV_2))){v=s._errorMsg("Invalid Signature: s-values greater than secp256k1n/2 are considered invalid");throw new Error(v)}return s.common.isActivatedEIP(3860)&&(0,h.checkMaxInitCodeSize)(s.common,s.data.length),(null===(o=null===r||void 0===r?void 0:r.freeze)||void 0===o||o)&&Object.freeze(s),s}return i(r,e),Object.defineProperty(r.prototype,"senderR",{get:function(){return this.r},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"senderS",{get:function(){return this.s},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"yParity",{get:function(){return this.v},enumerable:!1,configurable:!0}),r.fromTxData=function(t,e){return void 0===e&&(e={}),new r(t,e)},r.fromSerializedTx=function(t,e){if(void 0===e&&(e={}),!t.slice(0,1).equals(d))throw new Error("Invalid serialized tx input: not an EIP-2930 transaction (wrong tx type, expected: ".concat(1,", received: ").concat(t.slice(0,1).toString("hex")));var i=a.rlp.decode(t.slice(1));if(!Array.isArray(i))throw new Error("Invalid serialized tx input: must be array");return r.fromValuesArray(i,e)},r.fromRlpSerializedTx=function(t,e){return void 0===e&&(e={}),r.fromSerializedTx(t,e)},r.fromValuesArray=function(t,e){if(void 0===e&&(e={}),8!==t.length&&11!==t.length)throw new Error("Invalid EIP-2930 transaction. Only expecting 8 values (for unsigned tx) or 11 values (for signed tx).");var i=o(t,11),n=i[0],s=i[1],c=i[2],h=i[3],d=i[4],u=i[5],f=i[6],l=i[7],v=i[8],p=i[9],g=i[10];(0,a.validateNoLeadingZeroes)({nonce:s,gasPrice:c,gasLimit:h,value:u,v:v,r:p,s:g});return new r({chainId:new a.BN(n),nonce:s,gasPrice:c,gasLimit:h,to:d,value:u,data:f,accessList:null!==l&&void 0!==l?l:[],v:void 0!==v?new a.BN(v):void 0,r:p,s:g},e)},r.prototype.getDataFee=function(){if(this.cache.dataFee&&this.cache.dataFee.hardfork===this.common.hardfork())return this.cache.dataFee.value;var t=e.prototype.getDataFee.call(this);return t.iaddn(h.AccessLists.getDataFeeEIP2930(this.accessList,this.common)),Object.isFrozen(this)&&(this.cache.dataFee={value:t,hardfork:this.common.hardfork()}),t},r.prototype.getUpfrontCost=function(){return this.gasLimit.mul(this.gasPrice).add(this.value)},r.prototype.raw=function(){return[(0,a.bnToUnpaddedBuffer)(this.chainId),(0,a.bnToUnpaddedBuffer)(this.nonce),(0,a.bnToUnpaddedBuffer)(this.gasPrice),(0,a.bnToUnpaddedBuffer)(this.gasLimit),void 0!==this.to?this.to.buf:t.from([]),(0,a.bnToUnpaddedBuffer)(this.value),this.data,this.accessList,void 0!==this.v?(0,a.bnToUnpaddedBuffer)(this.v):t.from([]),void 0!==this.r?(0,a.bnToUnpaddedBuffer)(this.r):t.from([]),void 0!==this.s?(0,a.bnToUnpaddedBuffer)(this.s):t.from([])]},r.prototype.serialize=function(){var e=this.raw();return t.concat([d,a.rlp.encode(e)])},r.prototype.getMessageToSign=function(e){void 0===e&&(e=!0);var r=this.raw().slice(0,8),i=t.concat([d,a.rlp.encode(r)]);return e?(0,a.keccak256)(i):i},r.prototype.hash=function(){if(!this.isSigned()){var t=this._errorMsg("Cannot call hash method if transaction is not signed");throw new Error(t)}return Object.isFrozen(this)?(this.cache.hash||(this.cache.hash=(0,a.keccak256)(this.serialize())),this.cache.hash):(0,a.keccak256)(this.serialize())},r.prototype.getMessageToVerifySignature=function(){return this.getMessageToSign()},r.prototype.getSenderPublicKey=function(){var t;if(!this.isSigned()){var e=this._errorMsg("Cannot call this method if transaction is not signed");throw new Error(e)}var r=this.getMessageToVerifySignature();if(this.common.gteHardfork("homestead")&&(null===(t=this.s)||void 0===t?void 0:t.gt(c.N_DIV_2))){e=this._errorMsg("Invalid Signature: s-values greater than secp256k1n/2 are considered invalid");throw new Error(e)}var i=this,n=i.yParity,o=i.r,s=i.s;try{return(0,a.ecrecover)(r,n.addn(27),(0,a.bnToUnpaddedBuffer)(o),(0,a.bnToUnpaddedBuffer)(s))}catch(h){e=this._errorMsg("Invalid Signature");throw new Error(e)}},r.prototype._processSignature=function(t,e,i){var o=n(n({},this.txOptions),{common:this.common});return r.fromTxData({chainId:this.chainId,nonce:this.nonce,gasPrice:this.gasPrice,gasLimit:this.gasLimit,to:this.to,value:this.value,data:this.data,accessList:this.accessList,v:new a.BN(t-27),r:new a.BN(e),s:new a.BN(i)},o)},r.prototype.toJSON=function(){var t=h.AccessLists.getAccessListJSON(this.accessList);return{chainId:(0,a.bnToHex)(this.chainId),nonce:(0,a.bnToHex)(this.nonce),gasPrice:(0,a.bnToHex)(this.gasPrice),gasLimit:(0,a.bnToHex)(this.gasLimit),to:void 0!==this.to?this.to.toString():void 0,value:(0,a.bnToHex)(this.value),data:"0x"+this.data.toString("hex"),accessList:t,v:void 0!==this.v?(0,a.bnToHex)(this.v):void 0,r:void 0!==this.r?(0,a.bnToHex)(this.r):void 0,s:void 0!==this.s?(0,a.bnToHex)(this.s):void 0}},r.prototype.errorStr=function(){var t,e,r=this._getSharedErrorPostfix();return r+=" gasPrice=".concat(this.gasPrice," accessListCount=").concat(null!==(e=null===(t=this.accessList)||void 0===t?void 0:t.length)&&void 0!==e?e:0)},r.prototype._errorMsg=function(t){return"".concat(t," (").concat(this.errorStr(),")")},r}(s.BaseTransaction);e.default=u}).call(this,r(244).Buffer)},1152:function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var i=r(548),n=r(848),o=function(){function e(){}return e.fromTxData=function(t,e){if(void 0===e&&(e={}),"type"in t&&void 0!==t.type){var r=new i.BN((0,i.toBuffer)(t.type)).toNumber();if(0===r)return n.Transaction.fromTxData(t,e);if(1===r)return n.AccessListEIP2930Transaction.fromTxData(t,e);if(2===r)return n.FeeMarketEIP1559Transaction.fromTxData(t,e);throw new Error("Tx instantiation with type ".concat(r," not supported"))}return n.Transaction.fromTxData(t,e)},e.fromSerializedData=function(t,e){if(void 0===e&&(e={}),t[0]<=127){var r=void 0;switch(t[0]){case 1:r=2930;break;case 2:r=1559;break;default:throw new Error("TypedTransaction with ID ".concat(t[0]," unknown"))}return 1559===r?n.FeeMarketEIP1559Transaction.fromSerializedTx(t,e):n.AccessListEIP2930Transaction.fromSerializedTx(t,e)}return n.Transaction.fromSerializedTx(t,e)},e.fromBlockBodyData=function(e,r){if(void 0===r&&(r={}),t.isBuffer(e))return this.fromSerializedData(e,r);if(Array.isArray(e))return n.Transaction.fromValuesArray(e,r);throw new Error("Cannot decode transaction: unknown type input")},e.getTransactionClass=function(t,e){if(void 0===t&&(t=0),0==t||t>=128&&t<=255)return n.Transaction;switch(t){case 1:return n.AccessListEIP2930Transaction;case 2:return n.FeeMarketEIP1559Transaction;default:throw new Error("TypedTransaction with ID ".concat(t," unknown"))}},e}();e.default=o}).call(this,r(244).Buffer)},1153:function(t,e,r){"use strict";(function(t){var i=this&&this.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},t(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function i(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}(),n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var e,r=1,i=arguments.length;r<i;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},n.apply(this,arguments)},o=this&&this.__read||function(t,e){var r="function"===typeof Symbol&&t[Symbol.iterator];if(!r)return t;var i,n,o=r.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(i=o.next()).done;)a.push(i.value)}catch(s){n={error:s}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}return a};Object.defineProperty(e,"__esModule",{value:!0});var a=r(548),s=r(940),c=r(687),h=r(941),d=t.from(2..toString(16).padStart(2,"0"),"hex"),u=function(e){function r(t,r){void 0===r&&(r={});var i,o,s=this;(s=e.call(this,n(n({},t),{type:2}),r)||this).DEFAULT_HARDFORK="london";var d=t.chainId,u=t.accessList,f=t.maxFeePerGas,l=t.maxPriorityFeePerGas;if(s.common=s._getCommon(r.common,d),s.chainId=s.common.chainIdBN(),!s.common.isActivatedEIP(1559))throw new Error("EIP-1559 not enabled on Common");s.activeCapabilities=s.activeCapabilities.concat([1559,2718,2930]);var v=h.AccessLists.getAccessListData(null!==u&&void 0!==u?u:[]);if(s.accessList=v.accessList,s.AccessListJSON=v.AccessListJSON,h.AccessLists.verifyAccessList(s.accessList),s.maxFeePerGas=new a.BN((0,a.toBuffer)(""===f?"0x":f)),s.maxPriorityFeePerGas=new a.BN((0,a.toBuffer)(""===l?"0x":l)),s._validateCannotExceedMaxInteger({maxFeePerGas:s.maxFeePerGas,maxPriorityFeePerGas:s.maxPriorityFeePerGas}),s.gasLimit.mul(s.maxFeePerGas).gt(a.MAX_INTEGER)){var p=s._errorMsg("gasLimit * maxFeePerGas cannot exceed MAX_INTEGER (2^256-1)");throw new Error(p)}if(s.maxFeePerGas.lt(s.maxPriorityFeePerGas)){p=s._errorMsg("maxFeePerGas cannot be less than maxPriorityFeePerGas (The total must be the larger of the two)");throw new Error(p)}if(s.v&&!s.v.eqn(0)&&!s.v.eqn(1)){p=s._errorMsg("The y-parity of the transaction should either be 0 or 1");throw new Error(p)}if(s.common.gteHardfork("homestead")&&(null===(i=s.s)||void 0===i?void 0:i.gt(c.N_DIV_2))){p=s._errorMsg("Invalid Signature: s-values greater than secp256k1n/2 are considered invalid");throw new Error(p)}return s.common.isActivatedEIP(3860)&&(0,h.checkMaxInitCodeSize)(s.common,s.data.length),(null===(o=null===r||void 0===r?void 0:r.freeze)||void 0===o||o)&&Object.freeze(s),s}return i(r,e),Object.defineProperty(r.prototype,"senderR",{get:function(){return this.r},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"senderS",{get:function(){return this.s},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"yParity",{get:function(){return this.v},enumerable:!1,configurable:!0}),r.fromTxData=function(t,e){return void 0===e&&(e={}),new r(t,e)},r.fromSerializedTx=function(t,e){if(void 0===e&&(e={}),!t.slice(0,1).equals(d))throw new Error("Invalid serialized tx input: not an EIP-1559 transaction (wrong tx type, expected: ".concat(2,", received: ").concat(t.slice(0,1).toString("hex")));var i=a.rlp.decode(t.slice(1));if(!Array.isArray(i))throw new Error("Invalid serialized tx input: must be array");return r.fromValuesArray(i,e)},r.fromRlpSerializedTx=function(t,e){return void 0===e&&(e={}),r.fromSerializedTx(t,e)},r.fromValuesArray=function(t,e){if(void 0===e&&(e={}),9!==t.length&&12!==t.length)throw new Error("Invalid EIP-1559 transaction. Only expecting 9 values (for unsigned tx) or 12 values (for signed tx).");var i=o(t,12),n=i[0],s=i[1],c=i[2],h=i[3],d=i[4],u=i[5],f=i[6],l=i[7],v=i[8],p=i[9],g=i[10],m=i[11];return(0,a.validateNoLeadingZeroes)({nonce:s,maxPriorityFeePerGas:c,maxFeePerGas:h,gasLimit:d,value:f,v:p,r:g,s:m}),new r({chainId:new a.BN(n),nonce:s,maxPriorityFeePerGas:c,maxFeePerGas:h,gasLimit:d,to:u,value:f,data:l,accessList:null!==v&&void 0!==v?v:[],v:void 0!==p?new a.BN(p):void 0,r:g,s:m},e)},r.prototype.getDataFee=function(){if(this.cache.dataFee&&this.cache.dataFee.hardfork===this.common.hardfork())return this.cache.dataFee.value;var t=e.prototype.getDataFee.call(this);return t.iaddn(h.AccessLists.getDataFeeEIP2930(this.accessList,this.common)),Object.isFrozen(this)&&(this.cache.dataFee={value:t,hardfork:this.common.hardfork()}),t},r.prototype.getUpfrontCost=function(t){void 0===t&&(t=new a.BN(0));var e=a.BN.min(this.maxPriorityFeePerGas,this.maxFeePerGas.sub(t)).add(t);return this.gasLimit.mul(e).add(this.value)},r.prototype.raw=function(){return[(0,a.bnToUnpaddedBuffer)(this.chainId),(0,a.bnToUnpaddedBuffer)(this.nonce),(0,a.bnToUnpaddedBuffer)(this.maxPriorityFeePerGas),(0,a.bnToUnpaddedBuffer)(this.maxFeePerGas),(0,a.bnToUnpaddedBuffer)(this.gasLimit),void 0!==this.to?this.to.buf:t.from([]),(0,a.bnToUnpaddedBuffer)(this.value),this.data,this.accessList,void 0!==this.v?(0,a.bnToUnpaddedBuffer)(this.v):t.from([]),void 0!==this.r?(0,a.bnToUnpaddedBuffer)(this.r):t.from([]),void 0!==this.s?(0,a.bnToUnpaddedBuffer)(this.s):t.from([])]},r.prototype.serialize=function(){var e=this.raw();return t.concat([d,a.rlp.encode(e)])},r.prototype.getMessageToSign=function(e){void 0===e&&(e=!0);var r=this.raw().slice(0,9),i=t.concat([d,a.rlp.encode(r)]);return e?(0,a.keccak256)(i):i},r.prototype.hash=function(){if(!this.isSigned()){var t=this._errorMsg("Cannot call hash method if transaction is not signed");throw new Error(t)}return Object.isFrozen(this)?(this.cache.hash||(this.cache.hash=(0,a.keccak256)(this.serialize())),this.cache.hash):(0,a.keccak256)(this.serialize())},r.prototype.getMessageToVerifySignature=function(){return this.getMessageToSign()},r.prototype.getSenderPublicKey=function(){var t;if(!this.isSigned()){var e=this._errorMsg("Cannot call this method if transaction is not signed");throw new Error(e)}var r=this.getMessageToVerifySignature();if(this.common.gteHardfork("homestead")&&(null===(t=this.s)||void 0===t?void 0:t.gt(c.N_DIV_2))){e=this._errorMsg("Invalid Signature: s-values greater than secp256k1n/2 are considered invalid");throw new Error(e)}var i=this,n=i.v,o=i.r,s=i.s;try{return(0,a.ecrecover)(r,n.addn(27),(0,a.bnToUnpaddedBuffer)(o),(0,a.bnToUnpaddedBuffer)(s))}catch(h){e=this._errorMsg("Invalid Signature");throw new Error(e)}},r.prototype._processSignature=function(t,e,i){var o=n(n({},this.txOptions),{common:this.common});return r.fromTxData({chainId:this.chainId,nonce:this.nonce,maxPriorityFeePerGas:this.maxPriorityFeePerGas,maxFeePerGas:this.maxFeePerGas,gasLimit:this.gasLimit,to:this.to,value:this.value,data:this.data,accessList:this.accessList,v:new a.BN(t-27),r:new a.BN(e),s:new a.BN(i)},o)},r.prototype.toJSON=function(){var t=h.AccessLists.getAccessListJSON(this.accessList);return{chainId:(0,a.bnToHex)(this.chainId),nonce:(0,a.bnToHex)(this.nonce),maxPriorityFeePerGas:(0,a.bnToHex)(this.maxPriorityFeePerGas),maxFeePerGas:(0,a.bnToHex)(this.maxFeePerGas),gasLimit:(0,a.bnToHex)(this.gasLimit),to:void 0!==this.to?this.to.toString():void 0,value:(0,a.bnToHex)(this.value),data:"0x"+this.data.toString("hex"),accessList:t,v:void 0!==this.v?(0,a.bnToHex)(this.v):void 0,r:void 0!==this.r?(0,a.bnToHex)(this.r):void 0,s:void 0!==this.s?(0,a.bnToHex)(this.s):void 0}},r.prototype.errorStr=function(){var t=this._getSharedErrorPostfix();return t+=" maxFeePerGas=".concat(this.maxFeePerGas," maxPriorityFeePerGas=").concat(this.maxPriorityFeePerGas)},r.prototype._errorMsg=function(t){return"".concat(t," (").concat(this.errorStr(),")")},r}(s.BaseTransaction);e.default=u}).call(this,r(244).Buffer)},687:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.N_DIV_2=e.isAccessList=e.isAccessListBuffer=e.Capability=void 0;var i=r(548);function n(t){if(0===t.length)return!0;var e=t[0];return!!Array.isArray(e)}!function(t){t[t.EIP155ReplayProtection=155]="EIP155ReplayProtection",t[t.EIP1559FeeMarket=1559]="EIP1559FeeMarket",t[t.EIP2718TypedTransaction=2718]="EIP2718TypedTransaction",t[t.EIP2930AccessLists=2930]="EIP2930AccessLists"}(e.Capability||(e.Capability={})),e.isAccessListBuffer=n,e.isAccessList=function(t){return!n(t)},e.N_DIV_2=new i.BN("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0",16)},848:function(t,e,r){"use strict";var i=this&&this.__createBinding||(Object.create?function(t,e,r,i){void 0===i&&(i=r);var n=Object.getOwnPropertyDescriptor(e,r);n&&!("get"in n?!e.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,i,n)}:function(t,e,r,i){void 0===i&&(i=r),t[i]=e[r]}),n=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||i(e,t,r)},o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.FeeMarketEIP1559Transaction=e.TransactionFactory=e.AccessListEIP2930Transaction=e.Transaction=void 0;var a=r(1150);Object.defineProperty(e,"Transaction",{enumerable:!0,get:function(){return o(a).default}});var s=r(1151);Object.defineProperty(e,"AccessListEIP2930Transaction",{enumerable:!0,get:function(){return o(s).default}});var c=r(1152);Object.defineProperty(e,"TransactionFactory",{enumerable:!0,get:function(){return o(c).default}});var h=r(1153);Object.defineProperty(e,"FeeMarketEIP1559Transaction",{enumerable:!0,get:function(){return o(h).default}}),n(r(687),e)},940:function(t,e,r){"use strict";var i=this&&this.__createBinding||(Object.create?function(t,e,r,i){void 0===i&&(i=r);var n=Object.getOwnPropertyDescriptor(e,r);n&&!("get"in n?!e.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,i,n)}:function(t,e,r,i){void 0===i&&(i=r),t[i]=e[r]}),n=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)"default"!==r&&Object.prototype.hasOwnProperty.call(t,r)&&i(e,t,r);return n(e,t),e},a=this&&this.__values||function(t){var e="function"===typeof Symbol&&Symbol.iterator,r=e&&t[e],i=0;if(r)return r.call(t);if(t&&"number"===typeof t.length)return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")},s=this&&this.__read||function(t,e){var r="function"===typeof Symbol&&t[Symbol.iterator];if(!r)return t;var i,n,o=r.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(i=o.next()).done;)a.push(i.value)}catch(s){n={error:s}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}return a};Object.defineProperty(e,"__esModule",{value:!0}),e.BaseTransaction=void 0;var c=o(r(753)),h=r(548),d=r(687),u=function(){function t(t,e){this.cache={hash:void 0,dataFee:void 0},this.activeCapabilities=[],this.DEFAULT_CHAIN=c.Chain.Mainnet,this.DEFAULT_HARDFORK=c.Hardfork.Istanbul;var r=t.nonce,i=t.gasLimit,n=t.to,o=t.value,a=t.data,s=t.v,d=t.r,u=t.s,f=t.type;this._type=new h.BN((0,h.toBuffer)(f)).toNumber(),this.txOptions=e;var l=(0,h.toBuffer)(""===n?"0x":n),v=(0,h.toBuffer)(""===s?"0x":s),p=(0,h.toBuffer)(""===d?"0x":d),g=(0,h.toBuffer)(""===u?"0x":u);this.nonce=new h.BN((0,h.toBuffer)(""===r?"0x":r)),this.gasLimit=new h.BN((0,h.toBuffer)(""===i?"0x":i)),this.to=l.length>0?new h.Address(l):void 0,this.value=new h.BN((0,h.toBuffer)(""===o?"0x":o)),this.data=(0,h.toBuffer)(""===a?"0x":a),this.v=v.length>0?new h.BN(v):void 0,this.r=p.length>0?new h.BN(p):void 0,this.s=g.length>0?new h.BN(g):void 0,this._validateCannotExceedMaxInteger({value:this.value,r:this.r,s:this.s}),this._validateCannotExceedMaxInteger({gasLimit:this.gasLimit},64),this._validateCannotExceedMaxInteger({nonce:this.nonce},64,!0)}return Object.defineProperty(t.prototype,"transactionType",{get:function(){return this.type},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"type",{get:function(){return this._type},enumerable:!1,configurable:!0}),t.prototype.supports=function(t){return this.activeCapabilities.includes(t)},t.prototype.validate=function(t){void 0===t&&(t=!1);var e=[];return this.getBaseFee().gt(this.gasLimit)&&e.push("gasLimit is too low. given ".concat(this.gasLimit,", need at least ").concat(this.getBaseFee())),this.isSigned()&&!this.verifySignature()&&e.push("Invalid Signature"),t?e:0===e.length},t.prototype.getBaseFee=function(){var t=this.getDataFee().addn(this.common.param("gasPrices","tx"));return this.common.gteHardfork("homestead")&&this.toCreationAddress()&&t.iaddn(this.common.param("gasPrices","txCreation")),t},t.prototype.getDataFee=function(){for(var t=this.common.param("gasPrices","txDataZero"),e=this.common.param("gasPrices","txDataNonZero"),r=0,i=0;i<this.data.length;i++)0===this.data[i]?r+=t:r+=e;if(r=new h.BN(r),(void 0===this.to||null===this.to)&&this.common.isActivatedEIP(3860)){var n=Math.ceil(this.data.length/32),o=new h.BN(this.common.param("gasPrices","initCodeWordCost")).imuln(n);r.iadd(o)}return r},t.prototype.toCreationAddress=function(){return void 0===this.to||0===this.to.buf.length},t.prototype.isSigned=function(){var t=this,e=t.v,r=t.r,i=t.s;return 0===this.type?!!(e&&r&&i):!(void 0===e||!r||!i)},t.prototype.verifySignature=function(){try{var t=this.getSenderPublicKey();return 0!==(0,h.unpadBuffer)(t).length}catch(e){return!1}},t.prototype.getSenderAddress=function(){return new h.Address((0,h.publicToAddress)(this.getSenderPublicKey()))},t.prototype.sign=function(t){if(32!==t.length){var e=this._errorMsg("Private key must be 32 bytes in length.");throw new Error(e)}var r=!1;0===this.type&&this.common.gteHardfork("spuriousDragon")&&!this.supports(d.Capability.EIP155ReplayProtection)&&(this.activeCapabilities.push(d.Capability.EIP155ReplayProtection),r=!0);var i=this.getMessageToSign(!0),n=(0,h.ecsign)(i,t),o=n.v,a=n.r,s=n.s,c=this._processSignature(o,a,s);if(r){var u=this.activeCapabilities.indexOf(d.Capability.EIP155ReplayProtection);u>-1&&this.activeCapabilities.splice(u,1)}return c},t.prototype._getCommon=function(t,e){var r;if(e){var i=new h.BN((0,h.toBuffer)(e));if(t){if(!t.chainIdBN().eq(i)){var n=this._errorMsg("The chain ID does not match the chain ID of Common");throw new Error(n)}return t.copy()}return c.default.isSupportedChainId(i)?new c.default({chain:i,hardfork:this.DEFAULT_HARDFORK}):c.default.forCustomChain(this.DEFAULT_CHAIN,{name:"custom-chain",networkId:i,chainId:i},this.DEFAULT_HARDFORK)}return null!==(r=null===t||void 0===t?void 0:t.copy())&&void 0!==r?r:new c.default({chain:this.DEFAULT_CHAIN,hardfork:this.DEFAULT_HARDFORK})},t.prototype._validateCannotExceedMaxInteger=function(t,e,r){var i,n;void 0===e&&(e=256),void 0===r&&(r=!1);try{for(var o=a(Object.entries(t)),c=o.next();!c.done;c=o.next()){var d=s(c.value,2),u=d[0],f=d[1];switch(e){case 64:if(r){if(null===f||void 0===f?void 0:f.gte(h.MAX_UINT64)){var l=this._errorMsg("".concat(u," cannot equal or exceed MAX_UINT64 (2^64-1), given ").concat(f));throw new Error(l)}}else if(null===f||void 0===f?void 0:f.gt(h.MAX_UINT64)){l=this._errorMsg("".concat(u," cannot exceed MAX_UINT64 (2^64-1), given ").concat(f));throw new Error(l)}break;case 256:if(r){if(null===f||void 0===f?void 0:f.gte(h.MAX_INTEGER)){l=this._errorMsg("".concat(u," cannot equal or exceed MAX_INTEGER (2^256-1), given ").concat(f));throw new Error(l)}}else if(null===f||void 0===f?void 0:f.gt(h.MAX_INTEGER)){l=this._errorMsg("".concat(u," cannot exceed MAX_INTEGER (2^256-1), given ").concat(f));throw new Error(l)}break;default:l=this._errorMsg("unimplemented bits value");throw new Error(l)}}}catch(v){i={error:v}}finally{try{c&&!c.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}},t.prototype._getSharedErrorPostfix=function(){var t="";try{t=this.isSigned()?(0,h.bufferToHex)(this.hash()):"not available (unsigned)"}catch(n){t="error"}var e="";try{e=this.isSigned().toString()}catch(n){t="error"}var r="";try{r=this.common.hardfork()}catch(n){r="error"}var i="tx type=".concat(this.type," hash=").concat(t," nonce=").concat(this.nonce," value=").concat(this.value," ");return i+="signed=".concat(e," hf=").concat(r)},t}();e.BaseTransaction=u},941:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.AccessLists=e.checkMaxInitCodeSize=void 0;var i=r(548),n=r(687);e.checkMaxInitCodeSize=function(t,e){if(e>t.param("vm","maxInitCodeSize"))throw new Error("the initcode size of this transaction is too large: it is ".concat(e," while the max is ").concat(t.param("vm","maxInitCodeSize")))};var o=function(){function t(){}return t.getAccessListData=function(t){var e,r;if(t&&(0,n.isAccessList)(t)){e=t;for(var o=[],a=0;a<t.length;a++){for(var s=t[a],c=(0,i.toBuffer)(s.address),h=[],d=0;d<s.storageKeys.length;d++)h.push((0,i.toBuffer)(s.storageKeys[d]));o.push([c,h])}r=o}else{r=null!==t&&void 0!==t?t:[];var u=[];for(a=0;a<r.length;a++){var f=r[a],l=(0,i.bufferToHex)(f[0]),v=[];for(s=0;s<f[1].length;s++)v.push((0,i.bufferToHex)(f[1][s]));var p={address:l,storageKeys:v};u.push(p)}e=u}return{AccessListJSON:e,accessList:r}},t.verifyAccessList=function(t){for(var e=0;e<t.length;e++){var r=t[e],i=r[0],n=r[1];if(void 0!==r[2])throw new Error("Access list item cannot have 3 elements. It can only have an address, and an array of storage slots.");if(20!=i.length)throw new Error("Invalid EIP-2930 transaction: address length should be 20 bytes");for(var o=0;o<n.length;o++)if(32!=n[o].length)throw new Error("Invalid EIP-2930 transaction: storage slot length should be 32 bytes")}},t.getAccessListJSON=function(t){for(var e=[],r=0;r<t.length;r++){for(var n=t[r],o={address:"0x"+(0,i.setLengthLeft)(n[0],20).toString("hex"),storageKeys:[]},a=n[1],s=0;s<a.length;s++){var c=a[s];o.storageKeys.push("0x"+(0,i.setLengthLeft)(c,32).toString("hex"))}e.push(o)}return e},t.getDataFeeEIP2930=function(t,e){for(var r=e.param("gasPrices","accessListStorageKeyCost"),i=e.param("gasPrices","accessListAddressCost"),n=0,o=0;o<t.length;o++){n+=t[o][1].length}return t.length*i+n*r},t}();e.AccessLists=o}}]);
//# sourceMappingURL=9.624b00dd.chunk.js.map