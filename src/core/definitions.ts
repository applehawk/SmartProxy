﻿/*
 * This file is part of SmartProxy <https://github.com/salarcode/SmartProxy>,
 * Copyright (C) 2019 Salar Khalilzadeh <salar2k@gmail.com>
 *
 * SmartProxy is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * SmartProxy is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with SmartProxy.  If not, see <http://www.gnu.org/licenses/>.
 */
export const proxyServerProtocols = ["HTTP", "HTTPS", "SOCKS4", "SOCKS5"];
export const proxyServerSubscriptionObfuscate = ["None", "Base64"];

export enum ProxyModeType {
	Direct,
	SmartProxy,
	Always,
	SystemProxy
}

export enum ProxyRuleType {
	MatchPattern,
	Regex
}

export class Messages {
	public static PacProxySendRules = "PacSendRules";
}